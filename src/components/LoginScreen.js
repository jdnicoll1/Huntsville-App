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
  Dimensions,
  ActivityIndicator,
  Keyboard,
} from "react-native";
// next two imports for email and password icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { Video, AVPlaybackStatus } from "expo-av";

import firebase from "../database/firebaseDb";

class LoginScreen extends Component {
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

  signInUser() {
    if (this.state.email === "") {
      alert("Please enter an email");
    } else if (this.state.password == "") {
      alert("Please enter a password");
    } else {
      //alert('created account')
      if (
        !firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
      ) {
        alert("Incorrect email or password");
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            this.setState({
              isLoading: true,
            });
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
      //
      <View style={styles.container}>
        {/* <ImageBackground // when background is decided
          source={require("../assets/images/home_background.jpg")}
          style={styles.image}
        /> */}

        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Log In</Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
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
            <Text style={[styles.text_footer, { marginTop: 35 }]}>
              Password
            </Text>
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
          </TouchableWithoutFeedback>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.signInUser()}
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
              <Text style={[styles.textSign, { color: "#fff" }]}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Sign Up Screen")}
              style={[
                styles.signIn,
                {
                  borderColor: "#05375a",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text style={[styles.textSign, { color: "#05375a" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>

      //
    );
  }
}

import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: "#05375a",
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
});

export default LoginScreen;
