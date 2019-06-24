/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Header from './Header'

Footer = () => {
  
  return(
    <View>
      <Text>
        ini Footer
      </Text>
    </View>
  )
}

export default class App extends Component<Props> {
  
  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue"/>
        <Header />
        <Text>Test</Text>
        <Footer />
      </View>
    );
  }
}
