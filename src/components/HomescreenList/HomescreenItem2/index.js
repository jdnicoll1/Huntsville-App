import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Linking,
  SafeAreaView,
} from "react-native";
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
      <SafeAreaView style={{ alignItems: "center", marginTop: "17%" }}>
        <Text style={{ fontSize: 22, fontFamily: "Optima" }}>
          HISTORY OF HUNTSVILLE
        </Text>
      </SafeAreaView>

      <SafeAreaView
        style={{
          flexDirection: "row",
          height: "25%",
          padding: 20,
          marginTop: "10%",
          // borderWidth: 5,
          // borderColor: "red",
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            width: "35%",
            marginLeft: "3%",
            borderRadius: 10,
            // borderWidth: 3,
            // borderColor: "green",
            overflow: "hidden",
            marginRight: "2%",
          }}
        >
          <Image
            // style={styles.image}
            style={{ flex: 1, width: undefined }}
            source={require("../../../assets/images/samHouston.jpg")}
          />
        </View>
        {/* <View style={{ backgroundColor: "red", flex: 0.5 }} /> */}

        <View
          style={{
            // borderWidth: 3,
            // borderColor: "green",
            flexWrap: "wrap",
            alignItems: "flex-start",
            marginRight: "3%",
            width: "58%",
          }}
        >
          <Text style={{ fontSize: 16.5 }}>
            Huntsville, Texas was founded in 1836 when Pleasant and Ephraim Gray
            opened a trading post on the land. Ephraim Gray later became the
            first postmaster in 1837, naming it after his hometown of
            Huntsville, Alabama. Huntsville later became known as the home of
            Sam Houston (pictured).
          </Text>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          // borderWidth: 3,
          // borderColor: "blue",
          height: "40%",
          marginLeft: "3%",
          flexWrap: "wrap",
          alignItems: "flex-start",
          marginTop: "5%",
        }}
      >
        <Text style={{ fontSize: 16.5 }}>
          Houston served as the President of the Republic of Texas, Governor of
          Texas, and in the United States Senate, just to name a few of his
          positions. He led the Texas Army in the Battle of San Jacinto, which
          became known as the decisive victory of the Texas Revolution.{"\n"}
          {"\n"}He has been noted for his life among the Cherokees of Tennessee,
          and near the end of his life for his opposition to the American Civil
          War, a very unpopular position in his day.{"\n"}
          {"\n"}Huntsville is home to two of Houston's homes, his grave, and the
          Sam Houston Memorial Museum. Houston's life in Huntsville is also
          commemorated by his namesake Sam Houston State University.
        </Text>
      </SafeAreaView>
      <Button />

      <View style={styles.titles}>
        <Text>Screen 2</Text>
        <Text>History of Huntsville?</Text>
      </View>
    </View>
  );
};

export default HomescreenItem2;
