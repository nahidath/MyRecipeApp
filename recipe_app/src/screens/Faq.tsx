import {View, Text} from "react-native";
import styles from "../stylesheets/Faq_stylesheet";
import Accordion from "../components/Accordion";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import React from "react";
import general from "../stylesheets/General_stylesheet";
import {useTheme} from "@react-navigation/native";


const Faq = () => {

    const questions = [
        {
            title : "What is this app ?",
            answer : "This is a recipe app."
        },
        {
            title : "How can I add a recipe?",
            answer : "You can add a recipe by clicking the plus button in the bottom right corner."
        },
        {
            title : "How can I save a recipe as favorites ?",
            answer : "You can save a recipe as favorites by clicking the heart button in the top right corner or double tap on the recipe image."
        },
        {
            title : "Which recipe can I find in this app ?",
            answer : "You can find all kinds of recipes in this app."
        }
    ];

    const renderQuestions = () => {
        let items = [];
        for (let i = 0; i < questions.length; i++) {
            items.push(
                <Accordion title={questions[i].title} data={questions[i].answer} key={i}/>
            );
        }
        return items;
    }

    const {colors} = useTheme();
    const theme = useTheme();


    return (
        <View style={[styles.container, general.container, {backgroundColor:colors.background}]}>
            {theme.dark ? <FocusAwareStatusBar barStyle="light-content" backgroundColor="#252525" /> : <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fefefe" />}
            <View style={styles.faqContainer}>
                {renderQuestions()}
            </View>
        </View>
    );
};

export default Faq;