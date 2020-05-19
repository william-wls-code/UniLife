import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import EventItem from './EventItem';

const EventList = (props) => {
  const renderEventItem = (itemData) => {
    return (
      <EventItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        startDate={itemData.item.startDate}
        startTime={itemData.item.startTime}
        endDate={itemData.item.endDate}
        endTime={itemData.item.endTime}
        location={itemData.item.location}
        onSelectEvent={() => {
          props.navigation.navigate({
            routeName: 'EventDetail',
            params: {
              eventId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderEventItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default EventList;
