import React, { Component } from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";

const { width, height } = Dimensions.get("screen");
import faker from "faker";

// fake data to fill announcement bubbles for now
faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.random.number(60)}.jpg`,
    name: "School Closed",
    jobTitle:
      "This is the announcement text portion, here announcements will be made about school cancellations, road closures, weather advisories, etc",
    email: "Timestamp",
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
// end fake data

export default function AnnouncementScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: "20%" }}>
      <Text style={{ textAlign: "center", fontSize: 25 }}>Announcements</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: "5%",
        }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: 12,

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.2,
                shadowRadius: 10,
              }}
            >
              {/* <Image
                source={{ uri: item.image }}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                }}
              /> */}
              <View>
                <Text style={{ fontSize: 28, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.7 }}>
                  {item.jobTitle}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.8, color: "#0099cc" }}>
                  {item.email}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
