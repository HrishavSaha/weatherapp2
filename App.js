import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createSwitchNavigator, createAppContainer } from "react-navigation";

import WeatherScreen from "./screens/weatherScreen"
import LoginScreen from "./screens/login"
import LoadingScreen from "./screens/loadingScreen"
import Loc from "./screens/locAPI"

import firebase, {initializeApp} from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from "./config";

  const app = initializeApp(firebaseConfig);


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  WeatherScreen: WeatherScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <Loc/>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
