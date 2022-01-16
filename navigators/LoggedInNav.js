import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UplaodNav from "./UploadNav";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator screenOptions={{
      headerMode: 'none',
      mode: 'modal'
    }}>
      <Stack.Screen name="Tabs" component={TabsNav} />
      <Stack.Screen name="UploadNav" component={UplaodNav} />
    </Stack.Navigator>
  );
}
