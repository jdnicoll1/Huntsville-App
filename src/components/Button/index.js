import React from "react";
import { View, Text, Pressable, TouchableHighlight } from "react-native"; //highlight for darkening the button when pressed
import styles from "./styles";

const Button = (props) => {
  // props passed in through Homescreen component, can change properties and use the same button component with this
  // const type = props.type;
  // const backgroundColor = type === "primary" ? "black" : "white";

  const onPress = props.onPress;

  return (
    <View style={styles.container}>
      <Pressable
        // denotes the action of when a button is pressed
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "black" : "white",
          },
          styles.button,
        ]}
      >
        <Text style={styles.text}>Submit A Request</Text>
      </Pressable>
    </View>
  );
};

export default Button;
