// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Linking,
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
import MakeAnnouncements from "./components/MakeAnnouncements";
import RequestNavigator from "./navigation/RequestNavigator";
import AnnouncementNavigator from "./navigation/AnnouncementNavigator";

import { StackRouter } from "react-navigation";
import AuthNavigator from "./navigation/AuthNavigator";

import Screen from "./components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Button from "./components/Button";
import ImageInput from "./components/ImageInput";

import * as Notifications from "expo-notifications";
import expoPushTokensApi from "./api/expoPushTokens";

export default function App() {
  useEffect(() => {
    registerForPushNotifications();
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };
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
      <DrawerItem
        label="Facebook"
        onPress={() =>
          Linking.openURL("https://www.facebook.com/HuntsvilleTX/")
        }
      />
      <DrawerItem
        label="Visit Our Website"
        onPress={() => Linking.openURL("https://www.huntsvilletx.gov/")}
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
      <Drawer.Screen
        name="Getting Started"
        component={AuthNavigator}
        options={{ unmountOnBlur: true }} // unmount on blur resets the stack so it goes to getting started every time
      />
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Announcements" component={AnnouncementNavigator} />
      <Drawer.Screen name="Submit Request" component={RequestScreen} />
      <Drawer.Screen name="All Requests" component={RequestNavigator} />
      <Drawer.Screen
        name="Sign Out"
        component={AuthNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen name="Make Announcement" component={MakeAnnouncements} />
      {/* <Drawer.Screen name="Go To Google" component={} onPress={() => Linking.openURL("http://google.com")}/> */}
      {/* https://stackoverflow.com/questions/47351444/navigate-to-url-deep-link-with-drawernavigator-react-native */}
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
