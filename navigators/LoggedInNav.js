import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import MessagesNav from "./MessagesNav";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UploadForm from "../screens/UploadForm";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          mode: "modal",
        }}
      >
        <Stack.Screen
          name="TabsNav"
          options={{ headerShown: false }}
          component={TabsNav}
        />
        <Stack.Screen
          name="UploadNav"
          options={{ headerShown: false }}
          component={UploadNav}
        />
        <Stack.Screen
          name="UploadForm"
          options={{
            headerBackTitleVisible: false,
            headerBackImage: ({ tintColor }) => (
              <Ionicons color={tintColor} name="close" size={28} />
            ),
            title: "Upload",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
          component={UploadForm}
        />
        <Stack.Screen
          name="Messages"
          options={{ headerShown: false }}
          component={MessagesNav}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
