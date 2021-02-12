import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles"; // "./" denotes this directory

const HomescreenItem = (props) => {
  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={require("../../assets/images/wazowski_background.jpg")}
        style={styles.image}
      />
      {/* <View style={styles.button}>
          <Button
            color="orange"
            title="Click Me"
            onPress={() => console.log("Button tapped")}
          />
        </View> */}

      <View style={styles.titles}>
        <Text style={styles.titleText}> Welcome to Huntsville!</Text>
      </View>
    </View>
  );
};

export default HomescreenItem;
