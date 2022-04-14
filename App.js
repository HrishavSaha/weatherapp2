import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import database from 'firebase/database'
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import WeatherScreen from "./screens/weatherScreen"
import LoginScreen from "./screens/login"
import LoadingScreen from "./screens/loadingScreen"
import Loc from "./screens/locAPI"

const firebaseConfig = {
  apiKey: "AIzaSyBs1jgsIqzv8Tc3N7TLsqWRNZze_fnUt60",
  authDomain: "weatherapp2-40186.firebaseapp.com",
  databaseURL: "https://weatherapp2-40186-default-rtdb.firebaseio.com",
  projectId: "weatherapp2-40186",
  storageBucket: "weatherapp2-40186.appspot.com",
  messagingSenderId: "736858907718",
  appId: "1:736858907718:web:3728df5f95338c1bb85647"
};

firebase.initializeApp(firebaseConfig);


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
