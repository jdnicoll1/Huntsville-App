import React from "react";
import { FlatList, StyleSheet, View, Text, StatusBar } from "react-native";

import Card from "./Card";
import colors from "./config/colors";
import Screen from "./Screen";
import Header from "./Header";

const listings = [
  {
    id: 1,
    title: "Pothole on Main St",
    description:
      "Was driving by and saw this pothole today, would appreciate if it was fixed soon",
    image: require("../assets/images/pothole_example.jpg"),
  },
  {
    id: 2,
    title: "Garbage collection needed",
    description: "Garbage bin is overflowing and needs to be cleaned up",
    image: require("../assets/images/garbage_example.jpg"),
  },
];
const SPACING = 20;
function ListingsScreen({ navigation }) {
  StatusBar.setBarStyle("dark-content", true); // sets the time and carrier on iphone to black so it shows against the white background

  return (
    <Screen style={styles.screen}>
      {/* <Header {...props} /> */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          opacity: 0.8,
          paddingBottom: "3%",
        }}
      >
        All Requests
      </Text>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default ListingsScreen;
