import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100, //will allow menu png to display above any homescreen photo
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  menu: {
    width: 28,
    height: 28,
  },
});

export default styles;
