import React, { Component } from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const CalendarScreen = (props) => {
    return (
      <WebView
      ref={ref => (this.webview = ref)}
      source={{ uri: 'https://drive.google.com/file/d/1eLt__qNeDSLWICucY_DN4aodnX-24KC4/view?usp=sharing' }}
      onNavigationStateChange={this.handleWebViewNavigationStateChange}
      style={{ opacity: 0.99 }}
      />
    );
  };

  class MyWeb extends Component {
    render() {
      return <WebView source={{ uri: 'https://drive.google.com/file/d/1eLt__qNeDSLWICucY_DN4aodnX-24KC4/view?usp=sharing' }} />;
    }
  }

  CalendarScreen.navigationOptions = (navData) => {
    return {
      headerTitle: 'School Calendar',
    };
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default CalendarScreen;