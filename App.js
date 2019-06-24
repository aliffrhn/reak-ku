/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

class Header extends Component{
  
  render(){
    return(
      <Text>
        Check Header
      </Text>
    )
  }
}

export default class App extends Component<Props> {
  
  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue"/>
        <Header />
        <Text>Test</Text>
      </View>
    );
  }
}
