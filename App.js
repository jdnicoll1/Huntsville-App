import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading } from "expo"; //https://docs.expo.io/versions/latest/sdk/app-loading/
import {
  //https://www.youtube.com/watch?v=LBmsecuEXNQ
  useFonts,
  Tangerine_700Bold,
  Tangerine_400Regular,
} from "@expo-google-fonts/tangerine";

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
      <View style={styles.homeContainer}>
        <View style={styles.titles}>
          <Text style={styles.titleText}> Welcome to Huntsville!</Text>
        </View>
      </View>

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
  homeContainer: {
    width: "100%",
    height: "100%", // this container will fill the whole screen
  },
  titles: {
    marginTop: "70%",
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Tangerine_700Bold",
    fontSize: 100,
    fontWeight: "500",
  },
});
