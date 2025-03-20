import { View, Text, FlatList } from 'react-native';
import styles from '../../styles/home.styles';
import PRODUCTS from '../../constants/PRODUCTS';
import ProductCard from '../../components/ProductCard';
import { useState, useEffect, useCallback } from 'react';
import { getFavourites } from '../../utils/favorites';
import { useFocusEffect } from 'expo-router'; // Ensures page reloads when focused
import FavoriteCard from '../../components/FavouriteCard';

const Favorites = () => {
  const [favourites, setFavourites] = useState([]);

  const loadFavourites = async () => {
    try {
      const favouriteIds = await getFavourites() // Get saved favorite IDs
      const allProducts = Object.values(PRODUCTS).flat()
      const filteredProducts = allProducts.filter((product) => favouriteIds.includes(product.id));
      setFavourites(filteredProducts); // Update state
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavourites()
    }, [])
  )

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Favorites</Text>
      
      {favourites.length === 0 ? (
        <Text style={styles.emptyMessage}>No favorites added yet.</Text>
      ) : (
        <FlatList
          data={favourites} 
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FavoriteCard
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              isLiked={true} 
            
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Favorites;
