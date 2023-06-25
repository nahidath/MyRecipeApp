import {
    Button,
    FlatList,
    ImageBackground,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Share,
    TouchableWithoutFeedback,
    Image,
    Animated,
    Alert,
    LayoutChangeEvent,
    Modal,
    PanResponder,
    PanResponderInstance, Dimensions, NativeScrollEvent, NativeSyntheticEvent
} from "react-native";
import styles from "../stylesheets/Recipe_stylesheet";
import general from "../stylesheets/General_stylesheet";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import React, {FC, useEffect, useRef, useState} from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5Free from "react-native-vector-icons/FontAwesome";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {HomeStackList} from "../types/types";
import axios from "axios";
import * as WebBrowser from 'expo-web-browser';
import { LogBox } from 'react-native';
// import Share from "react-native-share";
// @ts-ignore
import {REACT_APP_API_KEY} from "@env";
import Feather from "react-native-vector-icons/Feather";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation, useTheme} from "@react-navigation/native";
import MyStackNavigationProp from "../components/MyStackNavigationProp";
import {SkeletonLoader, SkeletonView} from "../components/SkeletonLoader";
import StarIconLike from "../components/StarIconLike";
//import recipe649503.json from mock directory
import recipeMock from "../mock/recipe649503.json";
import bulkRecipeMock from "../mock/bulkRecipeMock.json";
import app, {auth, database} from "../firebase/config";
import { ref, set, remove, child } from "firebase/database";
import RecipeVideo from "../components/RecipeVideo";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {CarouselRecipes} from "../components/CarouselRecipes";



type Props = NativeStackScreenProps<HomeStackList, 'Recipe'>;
// @ts-ignore
type RecipesScreenProps = MyStackNavigationProp<HomeStackList, 'Recipe'>;

const Recipe = ({route}: Props) => {
    const navigation = useNavigation<RecipesScreenProps>();
    const configValue : string | undefined = REACT_APP_API_KEY;
    const [recipe, setRecipe] = useState<any>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [instructions, setInstructions] = useState<string[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);
    let lastTap : any = null;
    const {id} = route.params;
    const {name} = route.params;
    let {listOfRecipes} = route.params;
    const {listOfRecipesIDs} = route.params;
    const {screenFrom} = route.params;
    const {indxCurrent} = route.params;
    const [iC, setIC] = useState(indxCurrent ? indxCurrent : 0);
    const {colors} = useTheme();
    const theme = useTheme();
    const sourceUrlColor = theme.dark ? "#9892ef" : "#2319ad";
    const [animated, setAnimated] = useState<boolean>(false);
    const [titleLength, setTitleLength] = useState<number>(0);
    const [fontSize, setFontSize] = useState<number>(30);
    const titleRef = useRef<Text>(null);
    const [allRecipes , setAllRecipes] = useState<any>(listOfRecipes);

    const getRecipe = (idRecipe? : string) => {
        let idOfRecipe : string = idRecipe ? idRecipe : JSON.stringify(id);
        let dataInstruction : string | any[] = [];
        axios.get('https://api.spoonacular.com/recipes/'+idOfRecipe+'/information',{params:{apiKey: configValue} }).then((response) => {
            setRecipe(response.data);
            setIngredients(response.data.extendedIngredients.map((item: any) => item.original));
            dataInstruction = response.data.analyzedInstructions.map((item: any) => item.steps.map((item: any) => 'Step ' + item.number + ' : ' + item.step))
            setInstructions(dataInstruction[0]);
            setIsLoading(false);
            setTitleLength(response.data.title);
            setIsLoaded(true);
        }, (error) => {
            setRecipe(recipeMock);
            setIngredients(recipeMock.extendedIngredients.map((item: any) => item.original));
            dataInstruction = recipeMock.analyzedInstructions.map((item: any) => item.steps.map((item: any) => 'Step ' + item.number + ' : ' + item.step))
            setInstructions(dataInstruction[0]);
            setIsLoading(false);
            setIsLoaded(true);
            }).catch((error) => {
            console.log(error);


        });



    }


    // const getMultipleRecipes = () => {
    //     // let getRecipes : any[] = [];
    //     if (listOfRecipesIDs) {
    //         axios.get('https://api.spoonacular.com/recipes/informationBulk',{params:{apiKey: configValue, ids: listOfRecipesIDs.toString()} }).then((response) => {
    //             setAllRecipes(response.data);
    //             setIsLoading(false);
    //         }, (error) => {
    //             setAllRecipes(bulkRecipeMock);
    //             setIsLoading(false);
    //             console.log("1 " ,error);
    //         }).catch((error) => {
    //             console.log("2 ", error);
    //         });
    //     }
    // }
    //
    // useEffect(() => {
    //     if (listOfRecipesIDs) {
    //         console.log('search')
    //         console.log(listOfRecipesIDs.toString())
    //         setIsLoading(true);
    //         getMultipleRecipes();
    //
    //     }
    // }, [listOfRecipesIDs]);

    // console.log('allRecipes', allRecipes);




    const formatTime = (time: number) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        const m = minutes < 10 ? '0' + minutes : minutes
        return hours +'h' + m + ' minutes';
    }



    //share recipe
    let message : string = "Hey, I found this recipe on Recipe App, check it out!"+'\n'+'\n'+recipe.title+'\n'+'\n'+recipe.sourceUrl;
    const onShare = async () => {
        try {
            await Share.share({
                message
            });
        } catch (err) {
            console.log(err);
        }
    }

   const handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
            if(!auth.currentUser) {
                Alert.alert('Warning',
                    'You need to be logged in to save a recipe');
                return;
            }
            setSaved(true);
            saveRecipe();
            setAnimated(true);
            setTimeout(() => {
                setAnimated(false)
            }, 500);
        } else {
            lastTap = now;
        }
   }

    const confirmDelete = () => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to delete this recipe?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('No Pressed'),
                    style: 'cancel',
                },
                {text: 'Yes', onPress: () => deleteRecipe()},
            ],
            {cancelable: false},
        );
    }


    const deleteRecipe = () => {
        setSaved(false);
        const db = ref(database);
        const user = auth.currentUser;
        const userId = user?.uid;
        const recipeId = recipe.id;
        const recipeRef = child(db, `users/${userId}/recipes/${recipeId}`);
        remove(recipeRef).then(() => {
            console.log('Recipe deleted successfully');
        }).catch((error: any) => {
            console.log(error);
        });
    }

//save recipe into firebase database
    const saveRecipe = () => {
        const db = ref(database);
        const user = auth.currentUser;
        const userID = user?.uid;
        const recipeID = recipe.id;
        const recipeData = {
            recipeID: recipeID,
            userID: userID,
        };
        set(child(db, `users/${userID}/recipes/${recipeID}`), true).then(r => {
            console.log('Recipe saved successfully');

        });

    }

    const handleSave = () => {
        if(!auth.currentUser) {
            Alert.alert('Warning','You need to be logged in to save a recipe');
            return;
        }
        if(saved) {
            confirmDelete();
        } else {
            setSaved(true);
            saveRecipe();
            setAnimated(true);
            setTimeout(() => {
                setAnimated(false)
            }, 500);
        }
    }

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.measure((x: any, y: any, width: number, height: any, pageX: any, pageY: any) => {
                if (height > 80) {
                    setFontSize(fontSize - 2);
                }
            });
        }
    }, [fontSize]);
    const handleTextLayout = (event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        if (height > 80 && fontSize > 20) {
            setFontSize(fontSize - 2);
        }
    };



    // console.log(listOfRecipes?.length);

    const renderedList = listOfRecipes?.map((recipe: any, index : any) => {
        const getLabels = () => {
            let allLabels : string[] = [];
            const vegan : string = 'Vegan';
            const vegetarian : string = 'Vegetarian';
            const glutenFree : string = 'Gluten Free';
            const dairyFree : string = 'Dairy Free';
            const veryHealthy : string = 'Very Healthy';

            if (recipe.vegan) {
                allLabels.push(vegan);
            }
            if (recipe.vegetarian) {
                allLabels.push(vegetarian);
            }
            if (recipe.glutenFree) {
                allLabels.push(glutenFree);
            }
            if (recipe.dairyFree) {
                allLabels.push(dairyFree);
            }
            if (recipe.veryHealthy) {
                allLabels.push(veryHealthy);
            }

            return allLabels;
        }

            return (
                <ScrollView key={index}>
                    <View style={styles.headerRecipeImage} >
                        <TouchableWithoutFeedback style={{zIndex: 100}} onPress={() => handleDoubleTap()}>
                            {recipe.image ? <ImageBackground source={{uri: recipe.image}} style={styles.blocRecipeImage} imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} /> : <ImageBackground source={require('../../assets/no-photo-resized-new.png')} style={styles.blocRecipeImage}/>}
                        </TouchableWithoutFeedback>
                        {animated && <StarIconLike  scale={2} />}
                        <TouchableOpacity style={styles.shareBtn} onPress={() => onShare()}>
                            <Feather  name="share-2" size={32} color={"#fefefe"}  />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.heartBtn} onPress={() => handleSave()}>
                            {saved ? <FontAwesome name="heart" size={32} color={"#f8cf19"} /> : <FontAwesome name="heart-o" size={32} color={"#fefefe"} />}
                        </TouchableOpacity>
                        <View style={styles.headerRecipeLabel}>
                            {getLabels().map((label, index) => (
                                <Text key={index} style={styles.headerRecipeLabelText}>{label}</Text>
                            ))}
                        </View>
                        <LinearGradient
                            colors={['transparent','rgba(0,0,0,0.8)' ]}
                            style={styles.blocRecipeGradient}
                        >
                            {/*{recipe.title.length > 30 ? <Text style={styles.headerRecipeImageTextSmall}>{recipe.title}</Text> : <Text style={styles.headerRecipeImageText}>{recipe.title}</Text>}*/}
                            <Text ref={titleRef} style={[styles.headerRecipeImageText, {fontSize: fontSize}]} onLayout={handleTextLayout}>{recipe.title}</Text>
                            {/*<Text style={styles.headerRecipeImageText}>{recipe.title}</Text>*/}
                            <View style={styles.recipeLikes}>
                                <Text style={styles.recipeLikesText}>{recipe.aggregateLikes}</Text>
                                <FontAwesome style={styles.heart} name="thumbs-up" size={20} color="#9fc131" />
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={styles.recipeInfos}>
                        <Text style={[styles.time, {color:colors.text}]}><Feather name="clock" size={20} color={colors.text}/> Ready in {recipe.readyInMinutes > 59 ? formatTime(recipe.readyInMinutes) :recipe.readyInMinutes + " minutes"} </Text>
                        <Text style={[styles.servings, {color:colors.text}]}><Feather name="user" size={20} color={colors.text}/> Serves {recipe.servings} people</Text>
                        <View style={styles.ingredientList}>
                            <Text style={[styles.ingredientListTitle, {color:colors.text}]}>INGREDIENTS</Text>
                            {recipe.extendedIngredients.length == 0 ? <Text style={[styles.items, {color:colors.text, fontStyle: "italic"}]}>No ingredients available</Text>  :
                                recipe.extendedIngredients.map((ingredient : any, index: any) => (
                                <Text key={index} style={[styles.items, {color:colors.text}]}>- {ingredient.original}</Text>
                            ))}
                        </View>
                        <View style={styles.recipeDescription}>
                            <Text style={[styles.titleDesc, {color:colors.text}]}>PREPARATION</Text>
                            {recipe.analyzedInstructions.length == 0 ? <Text style={[styles.items, {color:colors.text, fontStyle: "italic"}]}>No instructions available</Text>  : recipe.analyzedInstructions[0].steps.map((step: any, index: any) => (
                                <Text key={index} style={[styles.items, {color:colors.text}]}>{step.number}. {step.step}</Text>
                            ))}
                        </View>
                    </View>
                    <Text style={styles.enjoy}>Enjoy your meal ! 😋</Text>
                    <Text style={[styles.source, {color:colors.text}]}>Source : <Text style={[styles.sourceLink, {color: sourceUrlColor}]} onPress={() => WebBrowser.openBrowserAsync(recipe.sourceUrl)}>{recipe.sourceUrl}</Text> </Text>
                </ScrollView>
            )
    })



    return (
        <View style={[styles.container, general.container, {backgroundColor: colors.background}]}>
            {theme.dark ? <FocusAwareStatusBar barStyle="light-content" backgroundColor="#252525" /> : <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fefefe" />}
            {isLoading ? <SkeletonView theme={theme} color={colors}/> :

                <CarouselRecipes listeOfRecipes={renderedList} indexRecipe={indxCurrent ? indxCurrent : 0}  lR={allRecipes}/>
            }
        </View>
    );
}

export default Recipe;