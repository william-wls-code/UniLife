import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet, Linking} from 'react-native';

const TodoScreen = (props) => {
  return (
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://drive.google.com/file/d/1eLt__qNeDSLWICucY_DN4aodnX-24KC4/view?usp=sharing')}>
  Google
</Text>
  );
};

TodoScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Todo',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodoScreen;
