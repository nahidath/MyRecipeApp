import {Image, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../stylesheets/SpotlightRecipes_stylesheet";
import general from "../stylesheets/General_stylesheet";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigation, useTheme} from "@react-navigation/native";
// @ts-ignore
import {REACT_APP_API_KEY} from "@env";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {HomeStackList} from "../types/types";
import MyStackNavigationProp from "../components/MyStackNavigationProp";
import {FilterModal} from "../components/Filters";
import Separator from "../components/Separator";
// import {SkeletonLoaderSearch} from "../components/SkeletonLoader";
import * as fsPromise from 'fs/promises';


type Props = NativeStackScreenProps<HomeStackList, 'Cuisine'>;
// @ts-ignore
type CuisineScreenProps = MyStackNavigationProp<HomeStackList, 'Cuisine'>;
const Cuisine = ({route}: Props) => {
    const configValue : string | undefined = REACT_APP_API_KEY;
    const [recipesC, setRecipesC ] = useState<any>([]);
    let cuisineFromHP  = route.params.cuisine;
    const navigation = useNavigation<CuisineScreenProps>();
    const [results, setResults] = useState<any>([]);
    const [noResults, setNoResults] = useState<string>('');
    const [nbResults, setNbResults] = useState<number>(0);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const getRecipesByCuisine = () => {
        axios.get('https://api.spoonacular.com/recipes/complexSearch',{params:{apiKey: configValue, number: 100, addRecipeInformation:true, query:'', cuisine: cuisineFromHP.toLowerCase()} }).then((response) => {
            setRecipesC(response.data.results);
            setLoading(false);
        },).catch((error) => {
            console.log(error);
        });

        //write the results in a file in the mock directory
        // fsPromise.writeFile('../mock/recipesByCuisine.json', JSON.stringify(recipesC), 'utf8').then(() => {
        //     console.log('File written');
        // }).catch((error) => {
        //     console.log(error);
        // });


    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: cuisineFromHP,
        })
        setLoading(true);
        getRecipesByCuisine();
    },[])

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        const m = minutes < 10 ? '0' + minutes : minutes
        return hours +'h' + m + ' min';
    }

    const {colors} = useTheme();
    const theme = useTheme();

    return (
        <View style={[styles.container, general.container, {backgroundColor: colors.background}]}>
            {theme.dark ? <FocusAwareStatusBar barStyle="light-content" backgroundColor="#252525" /> : <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fefefe" />}
            {/*{loading ? (*/}
            {/*    <View style={styles.loading}>*/}
            {/*        <SkeletonLoaderSearch theme={theme} color={colors} />*/}
            {/*    </View>*/}
            {/*): (*/}
            {/*    <>*/}
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <FilterModal search={''} setResults={setRecipesC} setNoResults={setNoResults} setNbResults={setNbResults} setIsSearch={setIsSearch} setLoading={setLoading} setModalVisible={setModalVisible} cuisine={cuisineFromHP}/>
                </Modal>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.floatingButton, general.shadow]}
                    onPress={() => setModalVisible(true)}
                >
                    <FontAwesome name="filter" size={30} color="#ffffff" />
                </TouchableOpacity>

            {isSearch && <View><Text style={[styles.resultsText, {color:colors.text}]}>{nbResults} {nbResults == 0 ? noResults : nbResults == 1 ? "Result founded" : "Results founded" } </Text><Separator /></View>}
            <ScrollView>
                {recipesC.map((recipe: any) => {
                    return (
                        <TouchableOpacity key={recipe.id} style={[styles.blocRecipe, general.shadow, {backgroundColor: colors.notification}]} onPress={() => navigation.push('Recipe', {id :recipe.id, name: recipe.title})}>
                            <View style={[styles.imgRecipe]}>
                                {recipe.image ? <Image source={{uri: recipe.image}} style={styles.blocRecipeImage}/> : <Image source={require('../../assets/no-photo-resized-new.png')} style={styles.blocRecipeImage} />}
                            </View>
                            <View style={styles.blocRecipeBelow}>
                                <Text style={[styles.blocRecipeImageText, {color:colors.text}]}>{recipe.title}</Text>
                                <Text style={[styles.time, {color:colors.text}]}><Feather name="clock" size={20} color={colors.text}/> {recipe.readyInMinutes > 59 ? formatTime(recipe.readyInMinutes) :recipe.readyInMinutes + " min"} </Text>
                                <View style={styles.blocRecipeLikes}>
                                    <Text style={[styles.recipeLikesText, {color:colors.text}]}>{recipe.aggregateLikes} <FontAwesome style={styles.heart} name="heart" size={20} color="#9fc131" /></Text>
                                </View>
                            </View>
                            <View style={styles.blocRecipeLabel}>
                                {recipe.vegan && <Text style={styles.blocRecipeLabelText}>Vegan</Text>}
                                {recipe.veryHealthy && <Text style={styles.blocRecipeLabelText}>Very Healthy</Text>}
                                {recipe.glutenFree && <Text style={styles.blocRecipeLabelText}>Gluten Free</Text>}
                                {recipe.vegetarian && <Text style={styles.blocRecipeLabelText}>Vegetarian</Text>}
                                {recipe.dairyFree && <Text style={styles.blocRecipeLabelText}>Dairy Free</Text>}
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            {/*        </>*/}
            {/*)}*/}
        </View>
    )

}

export default Cuisine;