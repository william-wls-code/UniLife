import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import NewsItem from './NewsItem';

const NewsList = (props) => {
  const renderNewsItem = (itemData) => {
    return (
      <NewsItem
        image={itemData.item.imageUrl}
        date={itemData.item.date}
        category={itemData.item.category}
        headline={itemData.item.headline}
        onSelectNews={() => {
          props.navigation.navigate({
            routeName: 'NewsDetail',
            params: {
              newsId: itemData.item.id,
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
        renderItem={renderNewsItem}
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

export default NewsList;
