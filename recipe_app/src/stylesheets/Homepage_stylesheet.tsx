import {StyleSheet} from "react-native";
import hairlineWidth = StyleSheet.hairlineWidth;
export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fefefe',
        flexDirection: 'column',
    },
    headerBloc: {
        width: '100%',
        padding : 15,
        paddingTop: 20,
        flexDirection: 'row',
        marginBottom: 10,

    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        paddingTop: 10,
        marginRight: 5,
        flex: 1,
    },
    subHeaderText: {
        fontSize: 20,
        color: '#f5f2eb',
        paddingLeft: 20,
        marginTop: -15,
    },
    headerBlocText:{
        top: 20,
        flexDirection: 'row',

    },
    headerNotification: {
        // top: 0,
        // right: 20,
        padding: 15,
        paddingRight: 0,
        // flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    recipesDisplay: {
       top: -30,
    },
    blocTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,

    },
    recipe1Title: {
        fontSize: 22,
        fontWeight: 'bold',
        width: '80%',
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
        margin: 20,
        marginTop: 0,
        borderColor: 'transparent',
        borderWidth: hairlineWidth,

    },
    blocRecipeImage: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
    },
    blocRecipeImageText: {
        // fontSize: 20,
        fontWeight: 'bold',
        color: '#fefefe',
        padding: 10,
    },
    blocRecipeLabel: {
        position: 'absolute',
        top: 10,
        flexDirection: 'row',
    },
    blocRecipeLabelText : {
        backgroundColor: 'rgba(195,229,111,0.75)',
        fontSize: 10,
        color: '#041721',
        padding: 5,
        marginLeft: 5,
        borderRadius: 10,
    },
    blocRecipeLike: {
        position: 'absolute',
        top: 10,
        left: 135,
    },
    blocRecipeGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: 170,
    },
    blocRecipeShadowAndroid: {
        shadowColor:'#000',
        elevation: 5,
    },
    blocRecipeShadowIOS: {
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor:'#171717',
    },
    profile: {
        width: 35,
        height: 35,
        borderRadius: 20,
        borderColor: '#041721',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#fefefe',
        justifyContent: 'center',
        alignItems: 'center',

    },
    searchBloc: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        margin: 20,
        // margin: 20,
        // marginBottom: 0,
        top: -20,
    },
    searchInput: {
        height: 60,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        paddingRight: 50,
    },
    searchButton: {
        padding: 10,
        // position: 'absolute',
        // right: 0,
        // top: 0,
    },
    pp: {
        width: 35,
        height: 35,
        borderRadius: 20,
        borderColor: '#041721',
        borderWidth: 1,
    },
    headerJoke: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    cuisineTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        width: '80%',
        padding: 20,
    },
    cuisineBloc: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },

    cuisineBlocItem: {
        width: 160,
        height: 250,
        borderRadius: 20,
        margin: 10,
        marginTop: 0,
        borderColor: 'transparent',
        borderWidth: hairlineWidth,
    },
    cuisineBlocItemText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fefefe',
        padding: 10,
    },
    cuisineBlocItemText2: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fefefe',
        padding: 10,
        textAlign: 'center',
    },
    cuisineBlocItemImage: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
    },
    cuisineGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 100,
    },
    searchText: {
        padding: 15,
        fontSize: 15,
        color: '#fefefe',
    },
    headerProfile: {
        // flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 5,
        paddingLeft: 0,

    },
    blocRecipeDelete: {
        position: 'absolute',
        top: 10,
        right: 3,
    }


});