import React, { useState, useEffect, Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import Loc from "./locAPI"

export default class WeatherScreen extends Component {

  componentDidMount(){
  }
  
  render() {
    return (
      <View>
        <Text> Weather Screen!!! </Text>
        <Text> {Loc.location} </Text>
      </View>
    );
  }
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
