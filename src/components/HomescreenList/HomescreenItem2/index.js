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

const HomescreenItem2 = (props) => {
  // for loading the fonts correctly, will throw an error if they aren't loaded
  let [fontsLoaded, error] = useFonts({
    Tangerine_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.homeContainer2}>
      {/* <ImageBackground // when background is decided
        source={require("../../../assets/images/wazowski_background.jpg")}
        style={styles.image}
      /> */}
      {/* <Video
        rate={1}
        shouldPlay
        isLooping
        muted={true}
        source={require("../../../assets/videos/city_background_trim.mp4")}
        style={styles.video}
        resizeMode="cover"
      /> */}
      <View style={styles.titles}>
        <Text>Screen 2</Text>
        <Text>History of Huntsville?</Text>
      </View>
    </View>
  );
};

export default HomescreenItem2;
