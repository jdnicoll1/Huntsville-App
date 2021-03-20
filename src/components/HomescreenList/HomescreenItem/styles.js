import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: Dimensions.get("window").height, // this container will fill the whole screen
    backgroundColor: "#fff",
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
    color: "#05375a",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute", // so text won't be pushed underneath
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
