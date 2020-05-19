import React, {useCallback} from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {EVENTS} from '../data/data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>• {props.children}</DefaultText>
    </View>
  );
};

const EventDetailScreen = (props) => {
  const eventId = props.navigation.getParam('eventId');
  const selectedEvent = EVENTS.find((event) => event.id === eventId);
  return (
    <ScrollView style={styles.bg}>
      <Image source={{uri: selectedEvent.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedEvent.title}</Text>
      <View style={styles.infoContainer}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Time" iconName="access-time" />
        </HeaderButtons>
        <Text style={styles.text}>
          {selectedEvent.startDate}&nbsp;{selectedEvent.startTime}
        </Text>
        <Text style={styles.text}> - </Text>
        <Text style={styles.text}>
          {selectedEvent.endDate}&nbsp;{selectedEvent.endTime}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Location" iconName="location-on" />
        </HeaderButtons>
        <Text style={styles.text}>{selectedEvent.location}</Text>
      </View>
      <View style={styles.infoContainer}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Language" iconName="record-voice-over" />
        </HeaderButtons>
        <Text style={styles.text}>{selectedEvent.language}</Text>
      </View>
      <View style={styles.infoContainer}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Fee" iconName="attach-money" />
        </HeaderButtons>
        <Text style={styles.text}>{selectedEvent.fee}</Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            paddingTop: 15,
            color: Colors.primaryColor,
          }}>
          Target Audience
        </Text>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Target Audience" iconName="group" />
        </HeaderButtons>
      </View>
      <View>
        {selectedEvent.targetAudience.map((targetAudience) => (
          <ListItem key={targetAudience}>{targetAudience}</ListItem>
        ))}
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            paddingLeft: 25,
            paddingTop: 15,
            color: Colors.primaryColor,
          }}>
          Description
        </Text>
        {selectedEvent.description.map((description) => (
          <ListItem key={description}>{description}</ListItem>
        ))}
      </View>
      <View style={styles.container}>
        <Button
          mode="contained"
          style={styles.button}
          color={Colors.highlightColor}
          labelStyle={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            letterSpacing: 0,
            color: 'white',
          }}>
          Register
        </Button>
      </View>
    </ScrollView>
  );
};

EventDetailScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Event Details',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  bgImage: {
    width: '100%',
  },
  button: {
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: Colors.highlightColor,
  },
  container: {
    width: '100%',
    paddingLeft: 27.5,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoContainer: {
    width: '100%',
    paddingLeft: 12.5,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 15,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    textAlign: 'left',
  },
  listItem: {
    marginVertical: 2.5,
    marginHorizontal: 20,
    padding: 5,
  },
});

export default EventDetailScreen;
