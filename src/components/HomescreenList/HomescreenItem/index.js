import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles"; // "./" denotes this directory
import Header from "../Header";

import AppLoading from "expo-app-loading"; //https://docs.expo.io/versions/latest/sdk/app-loading/
import {
  //https://www.youtube.com/watch?v=LBmsecuEXNQ
  useFonts,
  Tangerine_700Bold,
  Tangerine_400Regular,
} from "@expo-google-fonts/tangerine";

const HomescreenItem = (props) => {
  // for loading the fonts correctly, will throw an error if they aren't loaded
  let [fontsLoaded, error] = useFonts({
    Tangerine_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.homeContainer}>
      {/* <ImageBackground // when background is decided
        source={require("../../../assets/images/wazowski_background.jpg")}
        style={styles.image}
      /> */}
      <Header {...props} />
      <View style={styles.titles}>
        <Text style={styles.titleText}> Welcome to Huntsville!</Text>
      </View>

      <Button {...props} />
    </View>
  );
};

export default HomescreenItem;
