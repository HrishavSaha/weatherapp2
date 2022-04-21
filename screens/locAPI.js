import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as firebase from 'firebase';

let coords = [];

export default function Loc() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    coords=[location.coords.altitude, location.coords.latitude, location.coords.longitude]

    firebase.database().ref("weatherAPI/").set({
      altitude: coords[0],
      latitude: coords[1],
      longitude: coords[2],
    })
  }

  return (
  <View style={{marginTop:100}}>
    <Text>{text}</Text>
  </View>);
}