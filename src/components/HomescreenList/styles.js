import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    height: Dimensions.get("window").height, // this container will fill the whole screen, caps the height of the screen
  },
});

export default styles;
