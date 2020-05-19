import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import {MENU} from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';
import Menu from '../models/menu';

const HomeScreen = (props) => {
  const renderGridItem = (itemData, itemNav) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        icon={itemData.item.icon}
        link={itemData.item.link}
        onSelect={() => {
          props.navigation.navigate(itemData.item.);
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={MENU}
      navigation={{Menu}.link}
      renderItem={renderGridItem}
      numColumns={3}
      style={styles.screen}
    />
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
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    //elevation: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
