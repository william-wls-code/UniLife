import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
        <View style={{...styles.container}}>
          <Image source={props.icon} />
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CategoryGridTile;
