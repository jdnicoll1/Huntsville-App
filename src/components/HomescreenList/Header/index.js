import React from "react";
import {
  View,
  Image,
  Pressable,
  onPress,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Header(props) {
  const menuImage = require("../../../assets/images/menu.png");
  const logoImage = require("../../../assets/images/huntsville_logo_black.png");
  // TODO, find a way to change menuImage to closeImage when pressed
  // const [status, setStatus] = useState(false);
  // const navigation = useNavigation(); // tp get navigation

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Image style={styles.menu} source={menuImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Image style={styles.logo} source={logoImage} />
      </View>
    </>
  );
}
