import React from 'react';

import {MENU, MEALS} from '../data/data';
import EventList from '../components/EventList';

const CategoryInfoScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedInfo = MEALS.filter(
    (info) => info.categoryIds.indexOf(catId) >= 0,
  );

  return <EventList listData={displayedInfo} navigation={props.navigation} />;
};

CategoryInfoScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = MENU.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryInfoScreen;
