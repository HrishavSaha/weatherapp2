import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase/app';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';



let customFonts = {
  Papernotes: require('../assets/fonts/Papernotes-Sketch.ttf'),
};

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.cloudContainer}>
            <Image
              source={require('../assets/aesthetic.png')}
              style={styles.cloudImage}></Image>
          </View>
          <View style={styles.appTitle}>
            <Image
              source={require('../assets/icon.png')}
              style={styles.appIcon}></Image>
            <Text style={styles.appTitleText}>Weather App</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'   Username'}
              placeholderTextColor={'black'}
            />
            <TextInput
              style={styles.input}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'   Password'}
              placeholderTextColor={'black'}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.signInWithGoogleAsync()}>
              <Text style={styles.googleText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  appIcon: {
    width: RFValue(60),
    height: RFValue(60),
    resizeMode: 'contain',
  },
  appTitleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(35),
    fontFamily: 'Papernotes',
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(30),
    backgroundColor: 'white',
  },
  input: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(30),
    backgroundColor: 'white',
    marginBottom:5,
    flex:0.3
  },
  googleText: {
    color: 'black',
    fontSize: RFValue(20),
    fontFamily: 'Papernotes',
  },
  cloudContainer: {
    flex: 0.3,
  },
  cloudImage: {
    position: 'absolute',
    width: '100%',
    resizeMode: 'contain',
    bottom: RFValue(-70),
  },
});
