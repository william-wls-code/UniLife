import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import EventItem from './EventItem';

const EventList = (props) => {
  const renderEventItem = (itemData) => {
    return (
      <EventItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectInfo={() => {
          props.navigation.navigate({
            routeName: 'InfoDetail',
            params: {
              infoId: itemData.item.id,
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
