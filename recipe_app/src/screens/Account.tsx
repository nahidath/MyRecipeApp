import React, {FC, useEffect, useState} from "react";
import {
    View,
    Text,
    Pressable,
    TouchableOpacity,
    ScrollView,
    Alert,
    ImageBackground,
    Image,
    Modal,
    StyleSheet, ActivityIndicator
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Separator from "../components/Separator";
import styles from "../stylesheets/Profile_stylesheet";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import general from "../stylesheets/General_stylesheet";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MyStackNavigationProp from "../components/MyStackNavigationProp";
import {useFocusEffect, useNavigation, useNavigationState, useTheme} from "@react-navigation/native";
import {auth} from "../firebase/config";
import {LoginStackList, AccountStackList} from "../types/types";
import {deleteUser, signOut} from "firebase/auth";
import stylesMore from "../stylesheets/More_stylesheet";
// @ts-ignore
import * as ImagePicker from 'expo-image-picker';
import profile from "../stylesheets/Profile_stylesheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useLanguage} from "../translation/LanguageContext";


// @ts-ignore
type AccountProps = MyStackNavigationProp<AccountStackList, 'AccountPage'>;

const Account : FC = () => {

    const {colors} = useTheme();
    const theme = useTheme();
    const user = auth.currentUser;
    // console.log(user);
    // @ts-ignore
    const name = user == null ? "" : user.displayName;
    const navigation = useNavigation<AccountProps>();
    const userPic = user == null ? "" : user.photoURL;
    const [image, setImage] = useState<string | null>(null);
    const [newName, setNewName] = useState<string | null>(null);
    const colorSpec = theme.dark ? '#252525' : '#041721';
    const [loggedIn, setLoggedIn] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const {setLanguage, t} = useLanguage();
    const [translatedSettings, setTranslatedSettings] = useState<string | null>(null);
    const [translatedNotification, setTranslatedNotification] = useState<string | null>(null);
    const [translatedAppearance, setTranslatedAppearance] = useState<string | null>(null);
    const [translatedLanguages, setTranslatedLanguages] = useState<string | null>(null);
    const [translatedLoving, setTranslatedLoving] = useState<string | null>(null);
    const [translatedRate, setTranslatedRate] = useState<string | null>(null);
    const [translatedShare, setTranslatedShare] = useState<string | null>(null);
    const [translatedPrivacy, setTranslatedPrivacy] = useState<string | null>(null);
    const [translatedTerms, setTranslatedTerms] = useState<string | null>(null);
    const [translatedLogout, setTranslatedLogout] = useState<string | null>(null);
    const [translatedChooseLanguage, setTranslatedChooseLanguage] = useState<string | null>(null);
    const [translatedEnglish, setTranslatedEnglish] = useState<string | null>(null);
    const [translatedFrench, setTranslatedFrench] = useState<string | null>(null);
    const [translatedAbout, setTranslatedAbout] = useState<string | null>(null);





    // const route = useNavigationState(state => state.routes[state.index]);
    // console.log(route.name);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });

        return unsubscribe;
    }, [auth]);

    useEffect(() => {
        const fetchTranslation = async () => {
            try{
                const translationOfSettings = await t('Settings');
                const translationOfNotification = await t('Notifications');
                const translationOfAppearance = await t('Appearance');
                const translationOfLanguages = await t('Languages');
                const translationOfLoving = await t('Loving MyRecipeApp ?');
                const translationOfRate = await t('Rate us');
                const translationOfShare = await t('Share the application');
                const translationOfPrivacy = await t('Privacy Policy');
                const translationOfTerms = await t('Terms of use');
                const translationOfLogout = await t('LOG OUT');
                const translationOfChooseLanguage = await t('Choose your language');
                const translationOfEnglish = await t('English');
                const translationOfFrench = await t('French');
                const translationOfAbout= await t('About');
                setTranslatedSettings(translationOfSettings);
                setTranslatedNotification(translationOfNotification);
                setTranslatedAppearance(translationOfAppearance);
                setTranslatedLanguages(translationOfLanguages);
                setTranslatedLoving(translationOfLoving);
                setTranslatedRate(translationOfRate);
                setTranslatedShare(translationOfShare);
                setTranslatedPrivacy(translationOfPrivacy);
                setTranslatedTerms(translationOfTerms);
                setTranslatedLogout(translationOfLogout);
                setTranslatedChooseLanguage(translationOfChooseLanguage);
                setTranslatedEnglish(translationOfEnglish);
                setTranslatedFrench(translationOfFrench);
                setTranslatedAbout(translationOfAbout);
            } catch (e) {
                console.log('Error when translating text:', e);
            }
        };
        fetchTranslation();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
        if(loggedIn){
            navigation.navigate('Account', {screen: 'ProfileStackScreen/ProfilePage'});
        }
        // else {
        //     navigation.navigate('Account', {screen: 'ProfileStackScreen/ProfilePage'});
        // }
    }, [loggedIn]));

    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;
            const getNewInfos = async () => {
                try{
                    // @ts-ignore
                    const userPP = user?.photoURL;
                    const nameUser= user?.displayName;
                    if (isActive) {
                        // @ts-ignore
                        setImage(userPP);
                        // @ts-ignore
                        setNewName(nameUser);
                        // setLoading(false)
                    }
                }catch (e) {
                    console.log(e);
                }

            };
            getNewInfos();
            return () => {
                isActive = false;
            };
        },[user, userPic, name])
    );
    // if (loading) {
    //     return (
    //         <View>
    //             <ActivityIndicator size="large" color="#0000ff" />
    //         </View>
    //     );
    // }


    const logOut = () => {

        signOut(auth).then(() => {
            AsyncStorage.removeItem('userToken');
            AsyncStorage.removeItem('idToken');
            AsyncStorage.removeItem('refreshToken');
            console.log('User signed out!');
            navigation.navigate('Home', {screen: 'HomeStackScreen/HomePage'});
            // navigation.push('HomeStackScreen');
        }).catch((e) => {
            console.log(e);
        });
    }

    const changeLanguage = async (newLang : string) => {
        setLanguage(newLang);
        await AsyncStorage.setItem('lang', newLang);
        await t('reload');
    }


    return (
        <View style={[styles.container, general.container, {backgroundColor: colors.background}]}>
            {theme.dark ? <FocusAwareStatusBar barStyle="light-content" backgroundColor="#252525"/> :
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fefefe"/>}
            <ScrollView>
                <View style={{margin: 10}}>
                    <TouchableOpacity style={[styles.profileBtn, general.shadow, {backgroundColor: colors.notification}]} onPress={() => navigation.navigate('ProfileStackScreen')}>
                        {image ? <Image source={{uri: image}} style={styles.pp}/> :
                            <Feather name={"user"} size={24} color={colors.text} style={{borderColor: colors.text, borderRadius: 30, borderWidth: StyleSheet.hairlineWidth, padding: 5}}/>}
                        <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.profileBtnText, {color: colors.text}]}>{newName}</Text>
                        <Feather name={"arrow-right"} style={styles.arrowGo} size={24} color={colors.text}/>
                    </TouchableOpacity>
                    <Separator/>
                    <Text style={[stylesMore.textTitle, {color: colors.text}]}>{translatedSettings}</Text>
                    <TouchableOpacity style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}
                        onPress={() => navigation.push('NotificationSettings')}>
                        <Feather name={"bell"} size={22} color={colors.text}/>
                        {/*<Text style={[styles.btnStyleText, {fontFamily: 'Poppins'}]}>Notifs</Text>*/}
                        <Text style={[stylesMore.btnStyleText, {color: colors.text}]}>{translatedNotification}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}
                        onPress={() => navigation.push('DisplaySettings')}>
                        <Feather name={"settings"} size={22} color={colors.text}/>
                        <Text style={[stylesMore.btnStyleText, {color: colors.text}]}>{translatedAppearance}</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={stylesMore.centeredView}>
                            <View
                                style={[stylesMore.modalView, general.shadow, {backgroundColor: colors.notification}]}>
                                <Text style={[stylesMore.modalText, {color: colors.text}]}>{translatedChooseLanguage}</Text>
                                <Separator/>
                                <TouchableOpacity style={stylesMore.languageBtn} onPress={() => changeLanguage('en')}>
                                    <Text style={[stylesMore.languageBtnText, {color: colors.text}]}>{translatedEnglish}</Text>
                                </TouchableOpacity>
                                <Separator/>
                                <TouchableOpacity style={stylesMore.languageBtn}
                                                  onPress={() => changeLanguage('fr')}>
                                    <Text style={[stylesMore.languageBtnText, {color: colors.text}]}>{translatedFrench}</Text>
                                </TouchableOpacity>

                                {/*<TouchableOpacity style={[styles.btnStyle, general.shadow]} onPress={() => setModalVisible(!modalVisible)}>*/}
                                {/*    <Feather name={"x"} size={22} color={"#666666"} />*/}
                                {/*    <Text style={styles.btnStyleText}>Close</Text>*/}
                                {/*</TouchableOpacity>*/}
                                {/*<Pressable*/}
                                {/*    style={[styles.button, styles.buttonClose]}*/}
                                {/*    onPress={() => setModalVisible(!modalVisible)}>*/}
                                {/*    <Text style={styles.textStyle}>Hide Modal</Text>*/}
                                {/*</Pressable>*/}
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}
                        onPress={() => setModalVisible(true)}>
                        <Feather name={"globe"} size={22} color={colors.text}/>
                        <Text style={[stylesMore.btnStyleText, {color: colors.text}]}>{ translatedLanguages}</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={[stylesMore.textTitle, {color: colors.text}]}>Support</Text>
                        <TouchableOpacity
                            style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}
                            onPress={() => navigation.push('Faq')}>
                            <Feather name={"help-circle"} size={22} color={colors.text}/>
                            <Text style={[stylesMore.btnStyleText, {color: colors.text}]}>FAQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}
                            onPress={() => navigation.push('Contact')}>
                            <Feather name={"mail"} size={22} color={colors.text}/>
                            <Text style={[stylesMore.btnStyleText, {color: colors.text}]}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text
                            style={[stylesMore.textTitle, {color: colors.text}]}>{translatedLoving}</Text>
                        <TouchableOpacity
                            style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}>
                            <FontAwesome name={"star"} size={22} color={colors.text}/>
                            <Text
                                style={[stylesMore.btnStyleText, {color: colors.text}]}>{translatedRate}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}>
                            <FontAwesome name={"share"} size={22} color={colors.text}/>
                            <Text
                                style={[stylesMore.btnStyleText, {color: colors.text}]}>{translatedShare}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[stylesMore.textTitle, {color: colors.text}]}>{ translatedAbout}</Text>
                        <TouchableOpacity
                            style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}
                            onPress={() => navigation.push('PrivacyPolicy')}>
                            <Feather name={"shield"} size={22} color={colors.text}/>
                            <Text
                                style={[stylesMore.btnStyleText, {color: colors.text}]}>{translatedPrivacy}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[stylesMore.btnStyle, general.shadow, {backgroundColor: colors.notification}]}
                            onPress={() => navigation.push('TermsOfUse')}>
                            <FontAwesome name={"file"} size={22} color={colors.text}/>
                            <Text
                                style={[stylesMore.btnStyleText, {color: colors.text}]}>{translatedTerms}</Text>
                        </TouchableOpacity>
                    </View>
                    <Separator/>
                    <View>
                        <TouchableOpacity
                            style={[stylesMore.btnStyle, general.shadow, stylesMore.logoutBtn, {backgroundColor: colors.notification}]}
                            onPress={() => logOut()}>
                            <Feather name={"log-out"} size={24} color={'#fe2f3f'}/>
                            <Text
                                style={[stylesMore.btnStyleText, stylesMore.logoutTxt]}>{ translatedLogout}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 15}}>
                        <Text style={{color: 'grey', fontSize: 15, fontStyle: 'italic'}}>Version 1.0.0</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );

}

export default Account;