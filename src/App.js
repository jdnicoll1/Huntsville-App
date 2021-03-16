// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

// example drawer imports
import AnnouncementScreen from "./components/AnnouncementScreen";
import RequestScreen from "./components/RequestScreen";
import Homescreen from "./components/Homescreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import GettingStarted from "./components/GettingStarted";
import ListingsScreen from "./components/ListingsScreen";
import RequestNavigator from "./navigation/RequestNavigator";

import { StackRouter } from "react-navigation";
import AuthNavigator from "./navigation/AuthNavigator";

import Screen from "./components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Button from "./components/Button";
import ImageInput from "./components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Enable access in settings to select photos");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Could not read image");
    }
  };

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    // just using screen for example
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Getting Started" component={GettingStarted} />
      <Drawer.Screen name="Log In" component={LoginScreen} />
      <Drawer.Screen name="Sign Up" component={SignUpScreen} />
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Announcements" component={AnnouncementScreen} />
      <Drawer.Screen name="Submit Request" component={RequestScreen} />
      <Drawer.Screen name="All Requests" component={RequestNavigator} />
      <Drawer.Screen name="Sign Out" component={GettingStarted} />
    </Drawer.Navigator>
  );
}

// original styles - use this after done with drawer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
