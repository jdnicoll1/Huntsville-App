import React from "react";
import {
  View,
  Button,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import firebase from "../database/firebaseDb";
import "firebase/firestore";

class MakeAnnouncements extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
    };
  }

  submit() {
    // will send data off to firestore here (this.state has two items - title of announcement and content of announcement)
      const now = new Date()
      const utcMilllisecondsSinceEpoch = now.getTime()
      const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000) 
      firebase.firestore().collection("announcements").add({
          title: this.state.title,
          text: this.state.content,
          dateTime: utcSecondsSinceEpoch
      })
    console.warn(this.state);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={{ flex: 1, margin: 10 }}>
          <TextInput
            placeholder="Enter Title"
            onChangeText={(text) => {
              this.setState({ title: text });
            }}
            style={{
              borderWidth: 2,
              borderColor: "skyblue",
              margin: 20,
              padding: 10,
              fontSize: 20,
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="Enter Content"
            onChangeText={(text) => {
              this.setState({ content: text });
            }}
            multiline
            style={{
              borderWidth: 2,
              borderColor: "skyblue",
              margin: 20,
              padding: 10,
              fontSize: 20,
            }}
          />
          <Button
            title="Post"
            onPress={() => {
              this.submit();
            }}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

export default MakeAnnouncements;
