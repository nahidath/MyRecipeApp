import React, {useEffect, useState} from "react";
import {
    Link,
    NavigationContainer, useFocusEffect,
    useNavigation,
    useNavigationState,
    useRoute,
    useTheme
} from "@react-navigation/native";
import {
    ActivityIndicator,
    Alert, Image,
    Modal,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import styles from "../stylesheets/Login_stylesheet";
import general from "../stylesheets/General_stylesheet";
import {auth} from "../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import Account from "./Account";
import Register from "./Register";
import MyStackNavigationProp from "../components/MyStackNavigationProp";
import {LoginStackList, ProfileStackList} from "../types/types";
import Separator from "../components/Separator";
import Feather from "react-native-vector-icons/Feather";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useTranslation} from "../translation/TranslationFunc";
import {useLanguage} from "../translation/LanguageContext";

// @ts-ignore
type LoginProps = MyStackNavigationProp<LoginStackList, 'Login'>;
// type Props = NativeStackScreenProps<ProfileStackList, 'LoginStackScreen'>;



//Reset Password function



//Login function and principal screen
export default function Login () {
    const {translationFunc} = useTranslation();
    const {language,setLanguage, t} = useLanguage();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigation = useNavigation<LoginProps>();
    const {colors} = useTheme();
    const theme = useTheme();
    const colorSpec = theme.dark ? '#252525' : '#041721';
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [sent, setSent] = useState(false);
    const [translation1, setTranslation1] = useState<string>('Please enter your email and password');
    const [translation2, setTranslation2] = useState<string>('Your email or password was incorrect');
    const [translation3, setTranslation3] = useState<string>('Email sent');
    const [translation4, setTranslation4] = useState<string>('Please check your email to reset your password');
    const [translation5, setTranslation5] = useState<string>('User not found with this email');

    const [translation6, setTranslation6] = useState<string>('There was a problem with your request. Please try again later');
    const [translation7, setTranslation7] = useState<string>('Let\'s sign you in.');
    const [translation8, setTranslation8] = useState<string>('Welcome back !');
    const [translation9, setTranslation9] = useState<string>('Forgot password ?');
    const [translation10, setTranslation10] = useState<string>('Log in');
    const [translation11, setTranslation11] = useState<string>('Or continue with');
    const [translation12, setTranslation12] = useState<string>('Don\'t have an account ?');
    const [translation13, setTranslation13] = useState<string>('Register');
    const [translation14, setTranslation14] = useState<string>('I forgot my password');
    const [translation15, setTranslation15] = useState<string>('Please enter your email address below and you will receive a link to create a new password via email.');
    const [translation16, setTranslation16] = useState<string>('Submit');
    const [placeholder1, setPlaceholder1] = useState<string>('Email');
    const [placeholder2, setPlaceholder2] = useState<string>('Password');



    //TODO: fix login with facebook and google

    // const {from} = route.params;
    // const prevScreen = from;
    // console.log(route);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true);
            // navigation.push('Account');
        } else {
            setLoggedIn(false);
        }
    });

    useEffect(() => {
        const fetchTranslation = async () => {
            if (language != 'EN-US') {
                try {
                    const elementsTranslated = await translationFunc([translation1, translation2, translation3, translation4, translation5, translation6, translation7, translation8, translation9, translation10, translation11, translation12, translation13, translation14, translation15, translation16, placeholder1, placeholder2]);
                    setTranslation1(elementsTranslated[0]);
                    setTranslation2(elementsTranslated[1]);
                    setTranslation3(elementsTranslated[2]);
                    setTranslation4(elementsTranslated[3]);
                    setTranslation5(elementsTranslated[4]);
                    setTranslation6(elementsTranslated[5]);
                    setTranslation7(elementsTranslated[6]);
                    setTranslation8(elementsTranslated[7]);
                    setTranslation9(elementsTranslated[8]);
                    setTranslation10(elementsTranslated[9]);
                    setTranslation11(elementsTranslated[10]);
                    setTranslation12(elementsTranslated[11]);
                    setTranslation13(elementsTranslated[12]);
                    setTranslation14(elementsTranslated[13]);
                    setTranslation15(elementsTranslated[14]);
                    setTranslation16(elementsTranslated[15]);
                    setPlaceholder1(elementsTranslated[16]);
                    setPlaceholder2(elementsTranslated[17]);
                } catch (error) {
                    console.error('Erreur de traduction Login:', error);
                }
            }else {
                setTranslation1('Please enter your email and password');
                setTranslation2('Your email or password was incorrect');
                setTranslation3('Email sent');
                setTranslation4('Please check your email to reset your password');
                setTranslation5('User not found with this email');
                setTranslation6('There was a problem with your request. Please try again later');
                setTranslation7('Let\'s sign you in.');
                setTranslation8('Welcome back !');
                setTranslation9('Forgot password ?');
                setTranslation10('Log in');
                setTranslation11('Or continue with');
                setTranslation12('Don\'t have an account ?');
                setTranslation13('Register');
                setTranslation14('I forgot my password');
                setTranslation15('Please enter your email address below and you will receive a link to create a new password via email.');
                setTranslation16('Submit');
                setPlaceholder1('Email');
                setPlaceholder2('Password');
            }
        }
        fetchTranslation();
    }, [language]);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         if (loggedIn) {
    //             navigation.popToTop();
    //         }
    //     }, [loggedIn])
    // )



    const handleLogin = async () => {
        // const idToken: Promise<string> = auth.currentUser?.getIdToken(true) as Promise<string>;
        // const refreshToken: string = auth.currentUser?.refreshToken as string;

        if(email === '' || password === '') {
            setError(translation1);
            return;
        }
        try {
            signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                const idToken = await userCredential.user?.getIdToken();
                const refreshToken = await userCredential.user?.getIdToken(true);
                const tokenExpiration = await userCredential.user?.getIdTokenResult().then((result) => result.expirationTime);
                await AsyncStorage.setItem('idToken', idToken);
                await AsyncStorage.setItem('refreshToken', refreshToken);
                await AsyncStorage.setItem('tokenExpiration', tokenExpiration);
                console.log('idToken: ', idToken);
                console.log('refreshToken: ', refreshToken);

            })
            setError('');
            setLoading(true);
            navigation.navigate( 'HomeStackScreen', {screen: 'HomePage'});
        } catch (e) {
            // @ts-ignore
            if (e.code === 'auth/invalid-email' || e.code === 'auth/wrong-password') {
                setError(translation2);
                setPassword('');
            }
            // else { // @ts-ignore
            //     if (e.code === 'auth/email-already-in-use') {
            //                     setError('An account with this email already exists');
            //                 } else {
            //                     setError('There was a problem with your request');
            //                 }
            // }
        }
    };

    const resetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setSubmitted(true);
            setError('');
            setSent(true);
            Alert.alert(translation3,
                translation4,
                [
                    {
                        text: "Ok",
                        onPress: () => setModalVisible(false)
                    }
                ]
            );
        } catch (e) {
            // @ts-ignore
            if (e.code === 'auth/user-not-found') {
                setError(translation5);
            } else {
                setError(translation6);
            }
        }
    }

    const togglePassword = () => {
        setIsVisible(!isVisible);
    }

    // const handlePasswordChange = (value: string) => {
    //     setPassword(value);
    //     if (value.length < 0) {
    //         setError('');
    //     }
    // }
    //
    // useEffect(() => {
    //     handlePasswordChange(password)
    // }, [password]);

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#9fc131" />
            {/*{loading && <ActivityIndicator style={styles.activityIndicator} size="large" color="#9fc131" />}*/}
            <KeyboardAwareScrollView>
                <View style={styles.header}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    {/*<Text style={styles.title}>{translation7}</Text>*/}
                </View>
                <View style={styles.subHeader}>
                    <Text style={styles.subtitle}>{translation8}</Text>
                </View>
                    {error && <Text style={styles.error}>{error}</Text>}
                <View style={styles.form}>
                    <View style={styles.inputZone}>
                        <Feather name={'user'} size={20} color={"#f2f2f2"} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder={placeholder1}
                            placeholderTextColor={"#f2f2f2"}
                            onChangeText={setEmail}
                            value={email}
                            autoCapitalize={'none'}
                        />
                    </View>
                    <View style={[styles.inputZone, {flexDirection: 'row'}]}>
                        <Feather name={'lock'} size={20} color={"#f2f2f2"} style={styles.icon} />
                        <TextInput
                            style={[styles.input,  {paddingRight: 45}]}
                            placeholder={placeholder2}
                            placeholderTextColor={"#f2f2f2"}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={isVisible}
                        />
                        {isVisible ? <Feather name={'eye-off'} size={20} color={"#f2f2f2"} style={styles.showButton}  onPress={() => togglePassword()} /> : <Feather name={'eye'} size={20} color={"#f2f2f2"} style={styles.showButton} onPress={() => togglePassword()}/>}
                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.link}>{translation9}</Text>
                    </TouchableOpacity>
                    <View style={styles.inputZone}>
                        <TouchableOpacity style={styles.loginBtn}
                                          onPress={() => handleLogin()} activeOpacity={0.5}
                        >
                            <Text style={styles.btnText}>{translation10} <Feather name={'arrow-right'} size={16} color={"#9fc131"}/></Text>
                        </TouchableOpacity>
                        <View style={styles.divider}>
                            <View style={styles.line}></View>
                            <Text style={styles.dividerText}>{translation11}</Text>
                            <View style={styles.line}></View>
                        </View>
                        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.5}
                                          // onPress={() => handleFacebookLogin()}
                        >
                            <Text style={styles.btnText}><Image source={require('../../assets/facebook.png')} style={{width: 20, height: 20, padding:5}} />  Log with Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.5}
                                          // onPress={() => handleGoogleLogin()}
                        >
                            <Text style={styles.btnText}><Image source={require('../../assets/google.png')} style={{width: 20, height: 20, padding:5}} />  Log with Google</Text>
                        </TouchableOpacity>
                        {/*<TouchableOpacity style={[styles.loginBtn, {backgroundColor: colorSpec, borderColor: colors.border}]} activeOpacity={0.5} onPress={() => navigation.navigate('Register')}>*/}
                        {/*    <Text style={styles.btnText}>Create an account</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>



                    <Modal
                        visible={modalVisible}
                        animationType='slide'
                        transparent={true}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.modalContainer}>
                            <View style={[styles.modalView, general.shadow]}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalTitle}>{translation14}</Text>
                                    <TouchableOpacity  onPress={() => setModalVisible(false)}>
                                        <Feather name={"x"} size={24} color={'#9c9c9c'}/>
                                    </TouchableOpacity>
                                </View>
                                {/*{sent && <Text style={styles.success}>An email has been sent to {email}. Please check your email.</Text>}*/}
                                    <Text style={styles.modalText}>{translation15}</Text>
                                {error && <Text style={styles.error}>{error}</Text>}
                                <View style={styles.inputZone}>
                                    <Feather name={'mail'} size={20} color={"#041721"} style={styles.icon} />
                                    <TextInput
                                        style={[styles.input,  {borderBottomColor: "rgba(4,23,33,0.53)", color: "#041721"}]}
                                        placeholder={placeholder1}
                                        placeholderTextColor={"#041721"}
                                        onChangeText={setEmail}
                                        value={email}
                                        autoCapitalize={'none'}
                                    />
                                    <TouchableOpacity style={[styles.loginBtn, {backgroundColor: "#041721", borderColor: "#041721"}]}
                                                        onPress={() => resetPassword()}
                                    >
                                        <Text style={[styles.btnText, {color:"#f2f2f2"}]}>{translation16} <Feather name={'arrow-right'} size={16} color={"#fff"}/></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.registerAsk}>
                <Text style={styles.text}>{translation12} <Link to={'/Register'} style={styles.registerButton}>{translation13}</Link></Text>
            </View>
        </View>
    );

};

