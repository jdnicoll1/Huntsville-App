import React from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker as Picker, SubmitButton } from "./forms";
import CategoryPickerItem from "./CategoryPickerItem";
import Screen from "./Screen";
import FormImagePicker from "./forms/FormImagePicker";
import Header from "./Header";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
});

function RequestScreen(props) {
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
              price: "",
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
            <FormImagePicker name="images" />
            <SubmitButton title="Submit Request" />
          </Form>
        </Screen>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },
});

export default RequestScreen;
