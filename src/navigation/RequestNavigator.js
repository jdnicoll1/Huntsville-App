import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../components/ListingsScreen";
import ListingDetailsScreen from "../components/ListingDetailsScreen";

const Stack = createStackNavigator();

const RequestNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RequestNavigator;
