import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

export default function GettingStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground // when background is decided
        source={require("../assets/images/homescreen_background.png")}
        style={styles.image}
      />
      <View style={styles.header}>
        <ImageBackground // when background is decided
          source={require("../assets/images/homescreen_background.png")}
          style={styles.image}
        />
        <Text>Background Image or Video of Huntsville</Text>
        <Text>Might be cool to get some drone footage above</Text>
        <Text>Sam Houston University or the city</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Welcome to Huntsville!</Text>
        <Text style={styles.text}>Sign In With Account</Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Log In")}
            style={[
              styles.signIn,
              {
                borderColor: "#05375a",
                borderWidth: 1,
                marginBottom: 30,
                backgroundColor: "#05375a",
              },
            ]}
          >
            <Text style={styles.textSign}>Get Started</Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  header: {
    flex: 4.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 3,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute", // so text won't be pushed underneath
  },
});
