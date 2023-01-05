import {StyleSheet} from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#064851',
        flexDirection: 'column',
    },
    headerBloc: {
        width: '100%',
        height: 130,
        // backgroundColor: '#8cae00',
        backgroundColor:'#064851',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,

    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f5f2eb',
        // marginTop: 5,
        padding: 20,
        paddingTop: 15,
    },
    subHeaderText: {
        fontSize: 20,
        color: '#f5f2eb',
        paddingLeft: 20,
        marginTop: -15,
    },
    headerBlocText:{
      top: 20,
    },
    headerNotification: {
        top: -30,
        right: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    blocTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,

    },
    recipe1Title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f5f2eb',
    },
    recipe1Button: {
        padding: 6,
        fontWeight: 'bold',
    },
    blocDisplay: {
        flexDirection: 'row',
    },
    blocRecipe: {
        width: 170,
        height: 260,
        borderRadius: 20,
        backgroundColor: '#f5f2eb',
        margin: 20,

    }
});