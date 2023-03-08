import {StyleSheet} from "react-native";
import hairlineWidth = StyleSheet.hairlineWidth;


export default StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        margin: 10,
    },
    searchButton: {
        position: 'relative',
        top: 15,
        left: 5,
        // padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#064851',
        height: 45,
        width: 45,
        borderRadius: 50,
    },
    searchInput: {
        // backgroundColor: '#fefefe',
        // height: 50,
        // padding: 10,
        // // margin: 10,
        // borderRadius: 10,
        // flex : 1,
        fontSize: 15,
    },
    resultsText: {
        paddingLeft: 10,
        fontSize: 20,
    },
    itemBloc: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        height: 84,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
    },
    resultsContainer: {
        flex: 1,
        padding: 10,
    },
    icon:{
        padding: 10,
    },
    ingredientListContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -25,
    },
    ingreBox: {
        backgroundColor: '#d9d9d9',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        height: 100,
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        // textAlign: 'center',
    },
    contentContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    loading: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(238,238,238,0.52)',
        backgroundColor: '#FAF9F6',
        ...StyleSheet.absoluteFillObject,
        zIndex: 100,

    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
         // alignItems: 'flex-end',
        backgroundColor: 'rgba(155,155,155,0.52)',
        ...StyleSheet.absoluteFillObject,
        zIndex: 100,
        width: '100%',
        paddingBottom: 10,
        height: '90%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
    },
    modalBody: {
        width: '100%',
        paddingLeft: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modalText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    modalFilter: {
        flexDirection: 'column',
        width: '100%',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalFilterButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#064851',
        height: 45,
    },
    filterButton: {
        position: 'absolute',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        right: 10,
        // backgroundColor: '#064851',
        height: 45,
        width: 45,
        // borderRadius: 50,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    label: {
        margin: 8,
    },
    modalButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: '90%',
        borderRadius: 10,
        marginLeft: 15,
        marginRight: -10,
    },
    modalButtonText: {
        fontSize: 20,
        color: '#fff',
    },
    sideView: {
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        // transform: [{ translateX: 0 }],
    }

});