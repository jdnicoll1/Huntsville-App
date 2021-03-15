// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator> */}
      <MyDrawer />
    </NavigationContainer>
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
