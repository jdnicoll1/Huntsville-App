import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import HomescreenItem from "./components/HomescreenItem";

import AppLoading from "expo-app-loading"; //https://docs.expo.io/versions/latest/sdk/app-loading/
import {
  //https://www.youtube.com/watch?v=LBmsecuEXNQ
  useFonts,
  Tangerine_700Bold,
  Tangerine_400Regular,
} from "@expo-google-fonts/tangerine";

import Header from "./components/Header";

export default function App() {
  // for loading the fonts correctly, will throw an error if they aren't loaded
  let [fontsLoaded, error] = useFonts({
    Tangerine_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <HomescreenItem />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
