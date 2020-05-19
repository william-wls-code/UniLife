import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import DefaultText from './DefaultText';

const EventItem = (props) => {
  return (
    <View style={styles.eventItem}>
      <TouchableOpacity onPress={props.onSelectEvent}>
        <View>
          <View style={{...styles.eventRow, ...styles.eventHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={3}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.eventRow, ...styles.eventDetail}}>
            <DefaultText>{props.startDate}</DefaultText>
            <DefaultText>{props.startTime}</DefaultText>
            <DefaultText> - </DefaultText>
            <DefaultText>{props.endDate}</DefaultText>
            <DefaultText>{props.endTime}</DefaultText>
            <DefaultText>{props.location}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  eventItem: {
    height: 275,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  eventRow: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  eventHeader: {
    height: '85%',
  },
  eventDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default EventItem;
