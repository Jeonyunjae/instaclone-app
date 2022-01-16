import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        //screenOptions={{
        //  headerMode: "none",
        //  mode: "modal",
        //}}
      >
        <Stack.Screen name="Tabs" component={TabsNav} />
        <Stack.Screen name="UploadNav" component={UploadNav} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
