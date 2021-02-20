import React from "react";
import { View, Image, Pressable, onPress } from "react-native";

import styles from "./styles";

export default function Footer() {
  const DownArrow = require("../../../assets/images/down_arrow.png");

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={DownArrow} />
    </View>
  );
}
