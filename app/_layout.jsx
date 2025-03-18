import { Stack } from "expo-router";
import COLORS from "../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";
import { Text,View,TouchableOpacity } from 'react-native';
export default function RootLayout() {
  return   <Stack
  screenOptions={{
    headerStyle: {
      backgroundColor: COLORS.LIGHT_GREEN,
      headerTitleAlign: "center", 
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      color: COLORS.GRAY
      
    },
    contentStyle: {
      backgroundColor: COLORS.EXTRA_LIGHT_GREEN,
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    headerRight: () => (
      <TouchableOpacity>
        <Ionicons name="cart-outline" size={24} color={COLORS.GRAY} style={{ marginRight: 15 }} />
      </TouchableOpacity>
    ),
  }}

>

  <Stack.Screen name="index" options={{ title: 'Growcery' }} />
</Stack>
}
