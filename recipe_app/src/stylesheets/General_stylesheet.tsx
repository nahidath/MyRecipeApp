import {StyleSheet} from "react-native";


export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
        // borderBottomLeftRadius: 20,
        // zIndex: 100,

    },
    container_dark: {
        flex: 1,
        backgroundColor: '#121212',
        // borderBottomLeftRadius: 20,
        zIndex: 100,
    },
    shadow:{
        shadowOffset: {width:0, height: 1},
        shadowColor:'#171717',
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    shadowDark:{
        shadowOffset: {width:0, height: 1},
        shadowColor:'#fff',
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,

    }

});

