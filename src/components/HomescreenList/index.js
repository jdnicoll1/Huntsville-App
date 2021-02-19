import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomescreenItem from "./HomescreenItem";

import styles from "./styles";

//This is the HomeScreen Component
export default function HomescreenList(props) {
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
      <HomescreenItem {...props} />
    </ScrollView>
  );
}
