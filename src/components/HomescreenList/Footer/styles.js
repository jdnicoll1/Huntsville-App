import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute", // menu will not work with this on, might just be a really small target point
    bottom: 50,
    zIndex: 100, //will allow menu png to display above any homescreen photo
    flexDirection: "row",
    justifyContent: "center", // would be 'space-between' if you wanted to add a logo on the right
    width: "100%",
    alignSelf: "center",
    height: "5%",
    // borderWidth: 1,
    // paddingHorizontal: 25,
    // paddingBottom: 10,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});

export default styles;
