import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet, Linking} from 'react-native';
import TodoList from '../components/TodoList';

const TodoScreen = (props) => {
  return (
    <TodoList/>
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
