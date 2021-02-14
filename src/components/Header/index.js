import React from "react";
import { View, Image, Pressable, onPress } from "react-native";

import styles from "./styles";

const Header = (props) => {
  const menuImage = require("../../assets/images/menu.png");
  const closeImage = require("../../assets/images/close_icon.png");
  // TODO, find a way to change menuImage to closeImage when pressed
  return (
    <Pressable>
      {({ pressed }) => (
        <View style={styles.container}>
          {pressed ? (
            <Image style={styles.menu} source={closeImage} />
          ) : (
            <Image style={styles.closeIcon} source={menuImage} />
          )}
        </View>
      )}
    </Pressable>
  );
};

export default Header;
