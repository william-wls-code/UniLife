import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';

const ProfileScreen = (props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

ProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Profile',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
