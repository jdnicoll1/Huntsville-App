import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles"; // "./" denotes this directory
import Header from "../Header";

const HomescreenItem = (props) => {
  return (
    <View style={styles.homeContainer}>
      {/* <ImageBackground // when background is decided
        source={require("../../assets/images/wazowski_background.jpg")}
        style={styles.image}
      /> */}
      <Header />
      <View style={styles.titles}>
        <Text style={styles.titleText}> Welcome to Huntsville!</Text>
      </View>

      <Button
        onPress={() => {
          console.log("Request button was pressed");
        }}
      />
    </View>
  );
};

export default HomescreenItem;
