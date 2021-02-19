import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default function AnnouncementScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Announcement Screen</Text>
      <Button title="Toggle Menu" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
