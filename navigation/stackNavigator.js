import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherScreen from "../screens/weatherScreen"
//import TabNavigator from "./TabNavigator";
import LoginScreen from "../screens/login"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
