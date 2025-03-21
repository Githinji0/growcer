import { StyleSheet } from "react-native";
import COLORS from "../constants/COLORS";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LIGHT_GRAY,
        alignItems: "center",
        justifyContent: "space-between",
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
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexGrow: 1,

    },
    contentContainer: {
        padding: 20,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        marginBottom: 3,
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
        letterSpacing: 2,
        color: COLORS.GRAY
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
    },
    userImage:{
        width: 200,
        height: 200,
        borderRadius: 30,
        marginHorizontal: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },
    username:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: COLORS.MEDIUM_GREEN,
    },
    userEmail:{
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    editProfileBtn:{
        backgroundColor: COLORS.WHITE,
        padding: 7,
        borderRadius: 5,
        width: 40,
        marginTop: 10,
        textAlign: 'center',
        position: "absolute",
        top: 10,
        right: 10,
        padding: 5,
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
    },
    profilePicContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        alignSelf: 'center',
    },
    logoutBtn:{
        backgroundColor: COLORS.RED,
        padding: 7,
        borderRadius: 5,
        width: 140,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        padding: 5,
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    logoutText:{
        color: COLORS.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
    userPhone:{
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        letterSpacing: 2
    },
    editButton: {
        backgroundColor: COLORS.EXTRA_LIGHT_GREEN,
        padding: 7,
        borderRadius: 5,
        width: 140,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        padding: 5,
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },
      btnContainer:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",

      },
      editText:{
        color: COLORS.BLACK,
        fontSize: 18,
        fontWeight: 'bold',
      },
      infoBox:{
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 10,
        flex: 1,
        flexDirection:"row",
        alignItems: "center",
        height: "auto",
        justifyContent: "center",
      },
      infoContainer:{
        padding: 10,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: "94%",
        alignSelf: "center"
      },
      productImage:{
        width: 100,
        height: 100,
        marginBottom: 10,
        alignSelf: 'center',
        objectFit: 'center',
      }
})

export default styles;