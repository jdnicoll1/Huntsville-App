import React from "react";
import { Image, TouchableOpacity, View, StyleSheet } from "react-native";

function Header(props) {
  const menuImage = require("../assets/images/menu.png");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <Image style={styles.menu} source={menuImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute", // menu will not work with this on, might just be a really small target point
    top: "1%",
    zIndex: 100, //will allow menu png to display above any homescreen photo
    flexDirection: "row",
    justifyContent: "flex-end", // would be 'space-between' if you wanted to add a logo on the right
    width: "30%",
    alignSelf: "flex-end",
    height: "10%",
    paddingHorizontal: 25,
    paddingTop: 10,
    // borderWidth: 1,
  },
  menu: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  closeIcon: {
    backgroundColor: "white",
    width: 28,
    height: 28,
  },
});

export default Header;
