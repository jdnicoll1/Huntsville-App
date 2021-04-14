import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AnnouncementScreen from "../components/AnnouncementScreen";
import AnnouncementDetails from "../components/AnnouncementDetails";

const Stack = createStackNavigator();

const AnnouncementNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Announcements" component={AnnouncementScreen} />
      <Stack.Screen
        name="AnnouncementDetails"
        component={AnnouncementDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AnnouncementNavigator;
