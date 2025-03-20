import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVKEY = "favourites";

// Get favorites from AsyncStorage
export const getFavourites = async () => {
    try {
        const favourites = await AsyncStorage.getItem(FAVKEY);
        return favourites ? JSON.parse(favourites) : [];
    } catch (err) {
        console.error("Error retrieving favourites", err);
        return [];
    }
};

// Add a product to favorites
export const addFavourites = async (id) => {  // ✅ Fixed: Added 'id' as a parameter
    try {
        const favourites = await getFavourites();
        if (!favourites.includes(id)) {
            const updatedFavourites = [...favourites, id];
            await AsyncStorage.setItem(FAVKEY, JSON.stringify(updatedFavourites));
        }
    } catch (err) {
        console.error("Error adding favourites", err);
    }
};

// Remove a product from favorites
export const removeFavourites = async (id) => {
    try {
        const favourites = await getFavourites();
        const updatedFavourites = favourites.filter(f => f !== id);
        await AsyncStorage.setItem(FAVKEY, JSON.stringify(updatedFavourites));
    } catch (err) {
        console.error("Error removing favourites", err);
    }
};
