import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors';
import DefaultText from './DefaultText';

const NewsItem = (props) => {
  return (
    <View style={styles.newsItem}>
      <TouchableOpacity onPress={props.onSelectNews}>
        <View>
          <View style={{...styles.newsRow, ...styles.newsHeader}}>
            <Image source={{uri: props.image}} style={styles.bgImage} />
          </View>
          <View style={{...styles.newsRow, ...styles.newsDetail}}>
            <Text style={styles.category} numberOfLines={1}>
              {props.category}
            </Text>
            <Text style={styles.title} numberOfLines={3}>
              {props.headline}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    height: 275,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  newsRow: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  newsHeader: {
    height: '70%',
  },
  newsDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '30%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  category: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: Colors.secondaryColor,
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: Colors.primaryColor,
    textAlign: 'left',
  },
});

export default NewsItem;
