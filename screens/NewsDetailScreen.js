import React, {useCallback} from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {NEWS} from '../data/data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText style={styles.content}>{props.children}</DefaultText>
    </View>
  );
};

const NewsDetailScreen = (props) => {
  const newsId = props.navigation.getParam('newsId');
  const selectedNews = NEWS.find((news) => news.id === newsId);
  return (
    <ScrollView style={styles.bg}>
      <View style={styles.news}>
        <Image source={{uri: selectedNews.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{selectedNews.headline}</Text>
        <Text style={styles.subheading}>{selectedNews.subheading}</Text>
        <Text style={styles.date}>{selectedNews.date}</Text>
        <View>
          {selectedNews.content.map((content) => (
            <ListItem key={content}>{content}</ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

NewsDetailScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'News Details',
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
  news: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    alignContent: 'flex-start',
    textAlign: 'justify',
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
    paddingBottom: 2.5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    textAlign: 'left',
  },
  subheading: {
    paddingTop: 2.5,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 2.5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'left',
  },
  date: {
    paddingTop: 5,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#424142',
    textAlign: 'left',
  },
  listItem: {
    marginVertical: 2.5,
    marginHorizontal: 20,
    padding: 5,
    textAlign: 'justify',
  },
});

export default NewsDetailScreen;
