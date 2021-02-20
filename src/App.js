// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import HomescreenList from "./components/HomescreenList";
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
// example drawer imports
import HomeExample from "./components/HomeExample";
import AnnouncementScreen from "./components/AnnouncementScreen";
import ContactScreen from "./components/ContactScreen";
import Header from "./components/HomescreenList/Header";

export default function App() {
  StatusBar.setBarStyle("dark-content", true); // sets the time and carrier on iphone to black so it shows against the white background
  return (
    <NavigationContainer>
      <Header />
      <MyDrawer />
    </NavigationContainer>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomescreenList} />
      <Drawer.Screen name="Announcement" component={AnnouncementScreen} />
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
