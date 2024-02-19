import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#eff2f3',
        width: '100%',
        height: '100%',
        padding: 24
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: "#559edc",
        shadowColor: "#559edc",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    //item
    itemContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#dcddde',
        borderRadius: 8,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    itemTitle: {
        fontSize: 14
    }
})