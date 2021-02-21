// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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

export default function App() {
  StatusBar.setBarStyle("dark-content", true); // sets the time and carrier on iphone to black so it shows against the white background
  return (
    <NavigationContainer>
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
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Announcements" component={AnnouncementScreen} />
      <Drawer.Screen name="Requests" component={RequestScreen} />
      <Drawer.Screen name="Sign Out" component={LoginScreen} />
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
