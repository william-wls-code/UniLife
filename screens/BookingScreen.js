import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';

const BookingScreen = (props) => {
  return (
    <View>
      <Text>BookingScreen</Text>
    </View>
  );
};

BookingScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Booking',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookingScreen;
