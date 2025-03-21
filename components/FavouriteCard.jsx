import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { removeFavourites } from "../utils/favorites";
import styles from "../styles/home.styles";
import COLORS from "../constants/COLORS";

const FavoriteCard = ({ name, price, image, id, onRemove }) => {
    const router = useRouter();
    const handleRemove = async () => {
        await removeFavourites(id)
        if (onRemove) {
            onRemove(id)
        }
    };

    return (
        <TouchableOpacity style={{
            flex: 1,
            padding: 10,
            height: 100,
            margin: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 10,
            alignItems: "center",
            width: "94%",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,


        }} onPress={() => router.push(`/home/${id}`)}>
            <Pressable  onPress={() => {
                handleRemove
            }}>
                <AntDesign name="heart" size={24} color="green" />
            </Pressable>

            <Image source={image} style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                overflow: "hidden",

            }} resizeMode="cover" />

            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
                color: "#000"
            }}>{name}</Text>
            <Text style={{
                letterSpacing: 2    
            }}>Ksh. {price}</Text>
        </TouchableOpacity>
    );
};

export default FavoriteCard;
