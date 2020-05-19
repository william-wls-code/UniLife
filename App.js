import React from 'react';
import {Text, View} from 'react-native';
import EventsNavigator from './navigation/EventsNavigator';
import {enableScreens} from 'react-native-screens';
import { createStackNavigator } from 'react-navigation-stack';

enableScreens(); //for boosting efficiency

export default function App() {
  return <EventsNavigator />;
}
