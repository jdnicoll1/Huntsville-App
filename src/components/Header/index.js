import React from "react";
import { View, Image, Pressable, onPress } from "react-native";

import styles from "./styles";

const Header = (props) => {
  const menuImage = require("../../assets/images/menu.png");
  const closeImage = require("../../assets/images/close_icon.png");
  // TODO, find a way to change menuImage to closeImage when pressed
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          style={styles.menu}
          source={onPress == true ? closeImage : menuImage} // fix this
        />
      </Pressable>
    </View>
  );
};

export default Header;
