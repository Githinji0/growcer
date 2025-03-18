import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Redirect } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync(); // Hide splash screen after delay
    }, 2000); // Adjust time as needed
  }, []);
  return (
    <Redirect href="/home"/>
  );
}
