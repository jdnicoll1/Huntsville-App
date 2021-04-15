import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";

import colors from "./config/colors";
import ListItem from "./lists/ListItem";
import Text from "./Text";

function AnnouncementDetails({ route }) {
  const listing = route.params;
  return (
    <View>
      {/* <Image style={styles.image} source={listing.image} /> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.announcementTitle}</Text>
        <Text style={styles.description}>{listing.announcementText}</Text>
        <Text style={styles.description}>{listing.dateTime}</Text>
        <View style={styles.userContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    fontSize: 15,
    fontWeight: "500",
    color: "grey",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default AnnouncementDetails;
