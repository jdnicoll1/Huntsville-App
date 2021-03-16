import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "./Text";
import colors from "./config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, description, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 170,
  },
  description: {
    color: "grey",
    fontSize: 15,
  },
  title: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Card;
