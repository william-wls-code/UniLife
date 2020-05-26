'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';

import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Picker, Button } from 'native-base';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import LoginScreen from './LoginScreen';
const {width, height} = Dimensions.get('screen');

class AccountScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: true,
    }
  }

  componentWillMount() {
    // get the current user from firebase
    // const userData = this.props.firebaseApp.auth().currentUser;
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let userData = JSON.parse(user_data_json);
      this.setState({
        user: userData,
        loading: false
      });
    });
  }

  render() {
    return (
        <View style={styles.screen}>
            <View style={styles.headerSection}>
                <Text style={styles.title}>{this.state.user.email}</Text>
            </View>
            <View style={styles.mainSection}>
                <Button
                mode="contained"
                style={styles.button}
                color={Colors.highlightColor}
                labelStyle={styles.buttonContent}
                onPress={this.logout.bind(this)}>
                Logout
                </Button>
            </View>
        </View>
    );
}

  logout() {
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
        this.props.firebaseApp.auth().signOut().then(() => {
            this.props.navigator.push({
                component: LoginScreen
            });
        });  
    });
  }
}

AppRegistry.registerComponent('Account', () => AccountScreen);

AccountScreen.navigationOptions = (navData) => {
    return {
      headerTitle: 'Account',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        /* justifyContent: 'center',*/
        alignItems: 'center',
        backgroundColor: Colors.surfaceColor,
      },
      headerSection: {
        width: '100%',
        height: 150,
        padding: 20,
        paddingLeft: 35,
        textAlign: 'left',
        color: 'white',
        backgroundColor: Colors.secondaryColor,
        justifyContent: 'center',
      },
      mainSection: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.surfaceColor,
        marginTop: 30,
      },
      title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        textAlign: 'left',
        color: 'white',
        paddingBottom: 7.5,
      },
      button: {
        marginTop: 30,
        marginBottom: 20,
        width: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: Colors.highlightColor,
      },
      buttonContent: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        letterSpacing: 0,
        color: 'white',
      },
});

export default AccountScreen;