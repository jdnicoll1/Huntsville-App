import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  Button,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomescreenItem from "./HomescreenItem";
import HomescreenItem2 from "./HomescreenItem2";

import styles from "./styles";

//This is the HomeScreen Component
export default function HomescreenList(props) {
  StatusBar.setBarStyle("dark-content", true); // sets the time and carrier on iphone to black so it shows against the white background
  return (
    // order of items in scrollView will determine what order they show up on the screen

    <ScrollView
      style={styles.scrollView}
      snapToAlignment={"start"} // following 3 lines are for snapping screen to center of view
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("window").height}
      showsVerticalScrollIndicator={false}
    >
      <HomescreenItem {...props} />
      <HomescreenItem2 {...props} />
    </ScrollView>
  );
}
