import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableOpacity,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";

// next two imports for email and password icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { Video, AVPlaybackStatus } from "expo-av";

import firebase from "../database/firebaseDb";

class SignUpScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection("users");
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      isLoading: false,
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeUser() {
    if (this.state.name === "") {
      alert("Fill at least your name!");
    }
    if (this.state.password != this.state.confirmpassword) {
      alert("passwords do not match");
    } else {
      alert("created account");
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          this.setState({
            email: "",
            password: "",
            confirmpassword: "",
            isLoading: false,
          });
          this.props.navigation.navigate("Home");
        })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }
  render() {
    const BackArrow = require("../assets/images/back_arrow.png");
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {/* <Video
        rate={1}
        shouldPlay
        isLooping
        muted={true}
        source={require("../assets/videos/city_background_trim.mp4")}
        style={styles.video}
        resizeMode="cover"
      /> */}
        <ImageBackground // when background is decided
          source={require("../assets/images/homescreen_background.png")}
          style={styles.image}
          blurRadius={80}
        />
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Sign Up</Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.text_footer}>E-mail</Text>
          <View style={styles.action}>
            <FontAwesome // email icon and text field
              name="user-o"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="E-mail"
              style={styles.textInput}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, "email")}
              autoCapitalize="none"
            />
            {/* <Feather name="check-circle" color="green" size={20} /> */}
          </View>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome // email icon and text field
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.textInput}
              value={this.state.password}
              onChangeText={(val) => this.inputValueUpdate(val, "password")}
              autoCapitalize="none"
            />
            {/* <Feather name="eye-off" color="grey" size={20} /> */}
          </View>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <FontAwesome // email icon and text field
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={styles.textInput}
              value={this.state.confirmpassword}
              onChangeText={(val) =>
                this.inputValueUpdate(val, "confirmpassword")
              }
              autoCapitalize="none"
            />
            {/* <Feather name="eye-off" color="grey" size={20} /> */}
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.storeUser()}
              style={[
                styles.signIn,
                {
                  borderColor: "#05375a",
                  borderWidth: 1,
                  marginTop: 15,
                  backgroundColor: "#05375a",
                },
              ]}
            >
              <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Log In")}
              style={[
                styles.signIn,
                {
                  borderColor: "#05375a",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Image style={styles.icon} source={BackArrow} />
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute", // so text won't be pushed underneath
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default SignUpScreen;
