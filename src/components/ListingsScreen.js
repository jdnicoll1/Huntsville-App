import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "./Card";
import colors from "./config/colors";
import Screen from "./Screen";

const listings = [
  {
    id: 1,
    title: "Request 1",
    description: "Mike Wazowski",
    image: require("../assets/images/wazowski_background.jpg"),
  },
  {
    id: 2,
    title: "Request 2",
    image: require("../assets/images/wazowski_background.jpg"),
  },
];
const SPACING = 20;
function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
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
