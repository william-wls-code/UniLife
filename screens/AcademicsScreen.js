import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';

const AcademicsScreen = (props) => {
  return (
    <View>
      <Text>AcademicsScreen</Text>
    </View>
  );
};

AcademicsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Academics',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AcademicsScreen;
