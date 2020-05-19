import React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import {MENU} from '../data/data';
//import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';

import events from '../assets/icons/events.png';
import news from '../assets/icons/news.png';
import academics from '../assets/icons/academics.png';
import todo from '../assets/icons/todo.png';
import info from '../assets/icons/info.png';
import feedback from '../assets/icons/feedback.png';
import map from '../assets/icons/map.png';
import calendar from '../assets/icons/calendar.png';

const HomeScreen = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.screen}>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('Event')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={events} />
            <Text style={styles.title} numberOfLines={2}>
              Events
            </Text>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('News')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={news} />
            <Text style={styles.title} numberOfLines={2}>
              News
            </Text>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('Academics')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={academics} />
            <Text style={styles.title} numberOfLines={2}>
              Academics
            </Text>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('Todo')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={todo} />
            <Text style={styles.title} numberOfLines={2}>
              Todo
            </Text>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('Information')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={info} />
            <Text style={styles.title} numberOfLines={2}>
              Information
            </Text>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('Booking')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={feedback} />
            <Text style={styles.title} numberOfLines={2}>
              Feedback
            </Text>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('Mapsc')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={map} />
            <Text style={styles.title} numberOfLines={2}>
              Map
            </Text>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.gridItem}>
        <TouchableCmp onPress={() => props.navigation.navigate('Calendar')}>
          <View style={{...styles.container}}>
            <Image style={styles.image} source={calendar} />
            <Text style={styles.title} numberOfLines={2}>
            Calendar
            </Text>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const HomeNavOptions = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'Montserrat-Regular',
  },
  headerTintColor: Colors.primaryColor,
  headerTitle: 'Screen',
};

HomeScreen.navigationOptions = (navData) => {
  return {
    navigationOptions: HomeNavOptions,
    headerTitle: 'UniLife',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          style={styles.menu}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.surfaceColor,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    // flex: 1,
    margin: 10,
    marginTop: 15,
    height: 120,
    width: '27%',
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    //elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    textAlign: 'center',
  },
  image: {
    maxHeight: 72,
  },
  menu: {
    paddingLeft: 7.5,
  },
});

export default HomeScreen;
