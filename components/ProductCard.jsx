import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import styles from "../styles/home.styles";
import { useRouter } from "expo-router";
import { getFavourites, removeFavourites, addFavourites } from "../utils/favorites"; // ✅ Fixed function names

const ProductCard = ({ name, price, image, id }) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const loadFavourites = async () => {
      const favorites = await getFavourites()
      setIsLiked(favorites.includes(id))
    };
    loadFavourites();
  }, [id])

  const toggleLike = async () => {
    if (isLiked) {
      await removeFavourites(id)
    } else {
      await addFavourites(id)
    }

    const updatedFavorites = await getFavourites()
    setIsLiked(updatedFavorites.includes(id))
  };

  return (
    <TouchableOpacity style={styles.contentContainer} onPress={() => router.push(`/home/${id}`)}>
      <Pressable style={styles.heartIcon} onPress={toggleLike}>
        <AntDesign name={isLiked ? "heart" : "hearto"} size={24} color={isLiked ? "green" : "black"} />
      </Pressable>

      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.productHeader}>{name}</Text>
      <Text style={styles.productPrice}>Ksh. {price}</Text>

      <Pressable style={styles.addToCartBtn}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default ProductCard
