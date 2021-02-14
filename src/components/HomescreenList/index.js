import React from "react";
import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import HomescreenItem from "./HomescreenItem";

import styles from "./styles";

const HomescreenList = (props) => {
  return (
    // order of items in scrollView will determine what order they show up on the screen
    <ScrollView
      style={styles.scrollView}
      snapToAlignment={"start"} // following 3 lines are for snapping screen to center of view
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("window").height}
      showsVerticalScrollIndicator={false}
    >
      <HomescreenItem />
      <HomescreenItem />
    </ScrollView>
  );
};

export default HomescreenList;
