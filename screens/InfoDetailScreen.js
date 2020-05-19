import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {MEALS} from '../data/data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const InfoDetailScreen = (props) => {
  const infoId = props.navigation.getParam('infoId');

  const selectedInfo = MEALS.find((info) => info.id === infoId);

  return (
    <ScrollView>
      <Image source={{uri: selectedInfo.imageUrl}} style={styles.image} />
      <Text style={styles.title}>Ingredients</Text>
      {selectedInfo.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedInfo.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

InfoDetailScreen.navigationOptions = (navigationData) => {
  const infoId = navigationData.navigation.getParam('infoId');
  const selectedInfo = MEALS.find((info) => info.id === infoId);
  return {
    headerTitle: selectedInfo.title,
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
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    paddingTop: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default InfoDetailScreen;
