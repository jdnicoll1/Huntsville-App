import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  homeContainer2: {
    width: "100%",
    height: Dimensions.get("window").height, // this container will fill the whole screen
    backgroundColor: "#DCDCDC",
  },
  titles: {
    marginTop: "100%",
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Tangerine_700Bold",
    fontSize: 100,
    fontWeight: "500",
  },
  image: {
    marginLeft: "3%",
    width: "40%",
    height: "55%",
    resizeMode: "contain",
    //position: "absolute", // so text won't be pushed underneath
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
