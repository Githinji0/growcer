import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import styles from "../styles/home.styles";

const ProductCard = ({ name, price, image }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <View style={styles.contentContainer}>

      <Pressable style={styles.heartIcon} onPress={toggleLike}>
        <AntDesign name={isLiked ? "heart" : "hearto"} size={24} color={isLiked ? "green" : "black"} />
      </Pressable>


      <Image source={image} style={styles.image} resizeMode="contain" />


      <Text style={styles.productHeader}>{name}</Text>
      <Text style={styles.productPrice}>Ksh. {price}</Text>


      <Pressable style={styles.addToCartBtn}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};



export default ProductCard;
