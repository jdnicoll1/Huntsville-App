import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%", // means you're setting the button to fill 100% of parent container
    padding: 25, // this will add 10px to either side making the button a little smaller than the parent container
  },
  button: {
    backgroundColor: "#05375a",
    height: 40,
    borderRadius: 20, // rounds the corner of the button
    borderColor: "#fff",
    justifyContent: "center", // align vertically
    alignItems: "center", // will align horizontally
    borderWidth: 1.5,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
  },
});

export default styles;
