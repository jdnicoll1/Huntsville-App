import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";

import colors from "./config/colors";
import ListItem from "./lists/ListItem";
import Text from "./Text";

function AnnouncementDetails({ route }) {
  const listing = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", alignItems: "center" }}>
      <Image
        style={styles.image}
        source={require("../assets/images/city_logo.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.announcementTitle}</Text>
        <Text style={styles.description}>{listing.announcementText}</Text>
        <Text style={styles.descriptionTime}>{listing.dateTime}</Text>
        <View style={styles.userContainer}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    marginTop: "10%",
    borderTopColor: "grey",
    borderTopWidth: 3,
    height: "100%",
  },
  image: {
    width: "60%",
    height: 180,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
  },
  descriptionTime: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0099cc",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default AnnouncementDetails;
