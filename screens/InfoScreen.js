import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
const InfoScreen = (props) => {
  return (
    <View>
      <Text>infof</Text>
    </View>
  );
};

InfoScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Info',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoScreen;
