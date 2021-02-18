import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: Dimensions.get("window").height, // this container will fill the whole screen
    backgroundColor: "#FFF",
  },
  titles: {
    marginTop: "70%",
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Tangerine_700Bold",
    fontSize: 100,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute", // so text won't be pushed underneath
  },
});

export default styles;
