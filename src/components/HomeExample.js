// Homescreen.js
import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function HomeExample({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
