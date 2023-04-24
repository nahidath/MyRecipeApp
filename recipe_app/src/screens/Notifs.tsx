import React, {useEffect, useRef, useState} from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {FC} from "react";
import styles from "../stylesheets/Notifications_stylesheet";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import general from "../stylesheets/General_stylesheet";
import {useNavigation, useTheme} from "@react-navigation/native";
import {auth} from "../firebase/config";
import MyStackNavigationProp from "../components/MyStackNavigationProp";
import {NotificationsStackList} from "../types/types";
import NotificationPush from "../components/NotificationPush";
// @ts-ignore
type NotificationsProps = MyStackNavigationProp<NotificationsStackList, 'Notifs'>;

interface NotifsProps {
    notification : JSX.Element;
}



const Notifs = ({notification}:NotifsProps) => {
    // const [notifications, setNotifications] = useState<Notification[]>([]);
    //
    // useEffect(() => {
    //     const unsubscribe = NotificationsService.subscribe((notifications) => {
    //     setNotifications(notifications);
    //     });
    //
    //     return () => unsubscribe();
    // }, []);
    const {colors} = useTheme();
    const theme = useTheme();
    const user = auth.currentUser;
    const colorSpec = theme.dark ? '#252525' : '#041721';
    const navigation = useNavigation<NotificationsProps>();

    return (
        <View style={[styles.container, general.container, {backgroundColor: colors.background}]}>
            {theme.dark ? <FocusAwareStatusBar barStyle="light-content" backgroundColor="#252525" /> : <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fefefe" />}
            <ScrollView>
            <View style={styles.notificationContainer}>
            </View>
        </ScrollView>

        {/*{notifications.map((notification) => (*/}
        {/*    <Text key={notification.id}>{notification.message}</Text>*/}
        {/*))}*/}
        </View>
    );
};


export default Notifs;