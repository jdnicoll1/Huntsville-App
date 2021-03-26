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
  ActivityIndicator,
} from "react-native";

const { width, height } = Dimensions.get("screen");
import faker from "faker"; // just for list keys that we will need to assign later
import firebase from "../database/firebaseDb";
import 'firebase/firestore';


// set the correct date to display
var currentdate = new Date();
var hours = currentdate.getHours();
var ampm = hours >= 12 ? "pm" : "am";
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
var minutes = currentdate.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;
var datetime =
  hours +
  ":" +
  minutes +
  ampm +
  " " +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getDate() +
  "/" +
  currentdate.getFullYear();

function getAnnouncements() {
    var announcementsArray = [];
    firebase.firestore().collection('announcements').orderBy("dateTime", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                announcementsArray.push(doc.data());
                console.log(doc.id, doc.data());
                //console.log(announcementsArray[0]);
            });
        })
        .catch((error) => {
        console.log("Error getting documents: ", error);

        });
    return announcementsArray
} 
const DATA = getAnnouncements();
const SPACING = 20;
const AVATAR_SIZE = 70;
// end fake data

export default function AnnouncementScreen(props) {
  StatusBar.setBarStyle("dark-content", true); // sets the time and carrier on iphone to black so it shows against the white background
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: "15%" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          opacity: 0.8,
          paddingBottom: "3%",
        }}
      >
        Announcements
      </Text>
      <Header {...props} />
      <FlatList
        data={DATA}
        keyExtractor={(item => item.dateTime.seconds)}
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
                shadowOpacity: 0.15,
                shadowRadius: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 28, fontWeight: "700" }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.7 }}>
                  {item.text}
                </Text>
                <Text style={{ fontSize: 15, opacity: 0.8, color: "#0099cc" }}>
                  {new Date(item.dateTime.seconds * 1000).toLocaleString()}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

function Header(props) {
  const menuImage = require("../assets/images/menu.png");
  const closeImage = require("../assets/images/close_icon.png");
  // TODO, find a way to change menuImage to closeImage when pressed
  // const [status, setStatus] = useState(false);
  // const navigation = useNavigation(); // tp get navigation

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <Image style={styles.menu} source={menuImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute", // menu will not work with this on, might just be a really small target point
    top: 50,
    zIndex: 100, //will allow menu png to display above any homescreen photo
    flexDirection: "row",
    justifyContent: "flex-end", // would be 'space-between' if you wanted to add a logo on the right
    width: "30%",
    alignSelf: "flex-end",
    height: "10%",
    paddingHorizontal: 25,
    paddingTop: 10,
    // borderWidth: 1,
  },
  menu: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  closeIcon: {
    backgroundColor: "white",
    width: 28,
    height: 28,
  },
});
