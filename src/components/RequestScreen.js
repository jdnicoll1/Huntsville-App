import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker as Picker, SubmitButton } from "./forms";
import CategoryPickerItem from "./CategoryPickerItem";
import Screen from "./Screen";
import FormImagePicker from "./forms/FormImagePicker";
import Header from "./Header";

import firebase from "../database/firebaseDb";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
});

class RequestScreen extends React.Component{
    constructor(props) {
        super(props);
        this.dbRef = firebase.firestore().collection("users");
        this.state = {
            overview: "",
            details: "",
            photos: "",
            isLoading: false,
        };
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    };

    submitRequest() {
        alert('request submitted');      
    }
    
    render() {
        return (
            <Screen style={styles.container}>
                <Header {...this.props} />
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
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },
});

export default RequestScreen;
