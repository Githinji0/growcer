import { StyleSheet } from "react-native";
import COLORS from "../constants/COLORS";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LIGHT_GRAY,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    button: {
        padding: 10,
        backgroundColor: COLORS.DARK_GREEN,
        borderRadius: 5,
        width: 200,
        marginTop: 10
    },
    buttonText: {
        color: COLORS.GRAY,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: "center"
    },
    parentContentContainer: {
        padding: 10,
        backgroundColor: COLORS.LIGHT_GRAY,
        borderRadius: 10,
        marginBottom: 10,
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
        overflow: "visible",

    },
    contentContainer: {
        padding: 20,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        margin: 4
    },
    productHeader: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 3
    },
    textHeader: {
        fontSize: 20,
        marginTop: 3,
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: 15,
        marginTop: 5,
        letterSpacing: 2
    },
    addToCartText: {
        textAlign: 'center',
        color: COLORS.WHITE
    },
    addToCartBtn: {
        backgroundColor: COLORS.PRIMARY,
        padding: 7,
        borderRadius: 5,
        width: 100,
        marginTop: 7,
        textAlign: 'center',
    },
    heartIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        padding: 5,
        borderRadius: 15,
    }
})

export default styles;