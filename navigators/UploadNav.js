import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TakePhoto from "../screens/TakePhoto";
import SelectPhoto from "../screens/SelectPhoto";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UplaodNav() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarLabelStyle: { color: "white" },
        tabBarIndicatorStyle:{
          backgroundColor: "white",
          top: 1,
        }
      }}
    >
      <Tab.Screen name="SelectRoot">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Select" component={SelectPhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}