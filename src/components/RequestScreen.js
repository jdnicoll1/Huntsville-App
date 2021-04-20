import React, { useEffect, useState, useRef } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
} from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker as Picker } from "./forms";
import CategoryPickerItem from "./CategoryPickerItem";
import Screen from "./Screen";
import FormImagePicker from "./forms/FormImagePicker";
import Header from "./Header";
import * as Location from "expo-location";

// notification usage
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

import firebase from "../database/firebaseDb";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

// class RequestScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.dbRef = firebase.firestore().collection("users");
//         this.state = {
//             overview: "",
//             details: "",
//             photos: "",
//             isLoading: false,
//         };
//     }
//     inputValueUpdate = (val, prop) => {
//         const state = this.state;
//         state[prop] = val;
//         this.setState(state);
//     };

//     submitRequest() {
//         alert('request submitted');
//     }

//     render() {
//         return (
//             <Screen style={styles.container}>
//                 <Header {...this.props} />
//                 <Text
//                     style={{
//                         textAlign: "center",
//                         fontSize: 25,
//                         opacity: 0.8,
//                         paddingBottom: "3%",
//                         paddingTop: "1.7%",
//                     }}
//                 >
//                     Request Submission
//       </Text>

//                 <Form
//                     initialValues={{
//                         title: "",
//                         price: "",
//                         description: "",
//                         category: null,
//                         images: null,
//                     }}
//                     onSubmit={(values) => console.log(values)}
//                     validationSchema={validationSchema}
//                 >
//                     <FormField
//                         maxLength={255}
//                         name="title"
//                         placeholder="Give us an overview of your concern"
//                     />
//                     <FormField
//                         maxLength={255}
//                         multiline
//                         name="description"
//                         numberOfLines={3}
//                         placeholder="Provide a detailed description"
//                     />
//                     <FormImagePicker name="images" />
//                     <SubmitButton title="Submit Request" />
//                 </Form>
//             </Screen>
//         );
//     }
// }
const categories = [
  {
    backgroundColor: "#05375a",
    icon: "water",
    label: "Water",
    value: 1,
  },
  {
    backgroundColor: "#05375a",
    icon: "car",
    label: "Roads",
    value: 2,
  },
  {
    backgroundColor: "#05375a",
    icon: "trash-can",
    label: "Garbage",
    value: 3,
  },
  {
    backgroundColor: "#05375a",
    icon: "leaf",
    label: "Debris Removal",
    value: 4,
  },
  {
    backgroundColor: "#05375a",
    icon: "wrench",
    label: "Mainten-ance",
    value: 5,
  },
  {
    backgroundColor: "#05375a",
    icon: "none",
    label: "Other",
    value: 6,
  },
];

import Button from "./Button";

function SubmitButton({ title }) {
  // const { handleSubmit } = useFormikContext();

  return (
    <Button
      title={title}
      onPress={async () => {
        await sendPushNotification(expoPushToken);
      }}
    />
  );
}

function RequestScreen(props) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <Screen style={styles.container}>
          <Header {...props} />
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              opacity: 0.8,
              paddingBottom: "3%",
              paddingTop: "1.7%",
            }}
          >
            Request Submission
          </Text>

          <Form
            initialValues={{
              title: "",
              description: "",
              category: null,
              images: null,
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <FormField
              maxLength={255}
              name="title"
              placeholder="Give us an overview of your concern"
            />
            <FormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Provide a detailed description"
            />
            <Picker
              items={categories}
              name="category"
              numberOfColumns={3}
              PickerItemComponent={CategoryPickerItem}
              placeholder="Category"
              width="50%"
            />
            <FormImagePicker name="images" />
            <Button
              title="Submit Request"
              onPress={async () => {
                await sendPushNotification(expoPushToken);
              }}
            />
          </Form>
        </Screen>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Request Submitted!",
    body:
      "Based on our data, your request will be completed in the next 4 days!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },
});

export default RequestScreen;
