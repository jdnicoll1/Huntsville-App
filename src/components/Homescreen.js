import React from "react";
import { View } from "react-native";
import Header from "./HomescreenList/Header";
import HomescreenList from "./HomescreenList";

export default function Homescreen(props) {
  return (
    <View>
      <Header {...props} />
      <HomescreenList />
    </View>
  );
}
