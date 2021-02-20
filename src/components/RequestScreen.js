import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default function RequestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Request Screen</Text>
      <Button title="Toggle Menu" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
