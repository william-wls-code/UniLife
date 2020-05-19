import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color={Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
