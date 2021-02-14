import React from "react";
import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import HomescreenItem from "../HomescreenItem";

import styles from "./styles";

const HomescreenList = (props) => {
  return (
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
