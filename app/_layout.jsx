import { Stack } from "expo-router";
import COLORS from "../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  // Prevent rendering before fonts are loaded
  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.LIGHT_GREEN,
          headerTitleAlign: "center",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: COLORS.BLACK,
        },
        contentStyle: {
          backgroundColor: COLORS.EXTRA_LIGHT_GREEN,
          paddingTop: 10,
          paddingHorizontal: 10,
        },
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons
              name="cart-outline"
              size={24}
              color={COLORS.BLACK}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Growcery",
          headerTitleStyle: {
            fontFamily: "Pacifico_400Regular",
            fontSize: 24,
            fontWeight: "bold",
            color: COLORS.BLACK,
          },
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Growcery",
          headerTitleStyle: {
            fontFamily: "Pacifico_400Regular",
            fontSize: 24,
            fontWeight: "bold",
            color: COLORS.BLACK,
          },
        }}
      />
    </Stack>
  );
}
