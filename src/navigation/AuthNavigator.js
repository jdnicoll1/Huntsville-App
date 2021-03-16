import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GettingStarted from "../components/GettingStarted";
import LoginScreen from "../components/LoginScreen";
import SignUpScreen from "../components/SignUpScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Getting Started" component={GettingStarted} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
