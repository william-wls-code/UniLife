import React from 'react';
import {StyleSheet} from 'react-native';
import {EVENTS} from '../data/data';
import EventList from '../components/EventList';
import Colors from '../constants/Colors';

const EventScreen = (props) => {
  return <EventList listData={EVENTS} navigation={props.navigation} />;
};

EventScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Events',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.surfaceColor,
  },
});

export default EventScreen;
