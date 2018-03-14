/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import BottomTabBar from './components/BottomTabBar';

export default class App extends Component{
  constructor(props) {
    super(props); 
  }

  render() {
    return (
        
     <BottomTabBar></BottomTabBar>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#f0f0f0'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
