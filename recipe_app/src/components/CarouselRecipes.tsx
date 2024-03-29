import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import Carousel from "react-native-snap-carousel";
import Recipe from "../screens/Recipe";
import {ScrollView, View, StyleSheet, Text} from "react-native";
import PagerView from "react-native-pager-view";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {HomeStackList, SearchStackList} from "../types/types";
import MyStackNavigationProp from "./MyStackNavigationProp";
import {useNavigation} from "@react-navigation/native";



interface CarouselRecipesProps {
    listeOfRecipes: (JSX.Element | undefined)[] | undefined;
    indexRecipe: number;
    lR : string[] | undefined;
}
// @ts-ignore
type RecipesScreenProps = MyStackNavigationProp<HomeStackList, 'Recipe'>;


export const CarouselRecipes = ({listeOfRecipes, indexRecipe, lR} : CarouselRecipesProps) => {
    const navigation = useNavigation<RecipesScreenProps>();
    const [activePage, setActivePage] = useState(indexRecipe);

    const setNextRecipe = (event: { nativeEvent: any; }) => {
        const { nativeEvent } = event;
        const nextPosition = nativeEvent.position;

        if (nextPosition !== activePage) {
            setActivePage(nextPosition);
        }

    }

    useEffect(() => {
        let namE : any = '';
        if (lR) {
            namE = lR[activePage]
            namE = namE.title;
        }
        navigation.setOptions({
            headerTitle: namE,
        })

    }, [activePage]);


    return (
        <View style={{ flex: 1 }}>
            <PagerView style={styles.viewPager}  initialPage={indexRecipe} onPageScroll={setNextRecipe}>
                {listeOfRecipes}
            </PagerView>
        </View>

    );


}
const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});