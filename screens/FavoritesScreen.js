import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import EventList from '../components/EventList';
import {EVENTS} from '../data/data';

const FavoritesScreen = (props) => {
  //const favInfo = MEALS.filter((info) => info.id === 'm2' || info.id === 'm5');
  return <EventList listData={EVENTS} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
