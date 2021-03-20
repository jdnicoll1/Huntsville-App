import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute", // menu will not work with this on, might just be a really small target point
    top: "6.2%",
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
  container2: {
    position: "absolute", // menu will not work with this on, might just be a really small target point
    top: "6.2%",
    zIndex: 100, //will allow menu png to display above any homescreen photo
    flexDirection: "row",
    justifyContent: "flex-start", // would be 'space-between' if you wanted to add a logo on the right
    width: "30%",
    alignSelf: "flex-start",
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
  logo: {
    width: 32,
    height: 32,
  },
});

export default styles;
