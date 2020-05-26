'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  AsyncStorage,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';

import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import SignupScreen from './SignupScreen';
import AccountScreen from './AccountScreen'

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
const {width, height} = Dimensions.get('screen');

class LoginScreen extends React.Component {
  constructor(){
    super();
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  render() {
    return (
        <View style={styles.screen}>
            <View style={styles.headerSection}>
                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.headerText}>Login here using your email and password</Text>
            </View>
            <View style={styles.formSection}>
                <TextInput
                label="Email"
                returnKeyType="next"
                value={this.state.email}
                onChangeText={(text) => this.updateInput('email', text)}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                style={styles.formInput}
                underlineColor={Colors.secondaryColor}
                theme={{colors: {primary: Colors.highlightColor}}}
                />
                <TextInput
                label="Password"
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(text) => this.updateInput('password', text)}
                autoCapitalize="none"
                autoCompleteType="off"
                textContentType="password"
                keyboardType="default"
                style={styles.formInput}
                underlineColor={Colors.secondaryColor}
                theme={{colors: {primary: Colors.highlightColor}}}
                />
                <Button
                mode="contained"
                style={styles.button}
                color={Colors.highlightColor}
                labelStyle={styles.buttonContent}
                onPress={this.login.bind(this)}>
                Login
                </Button>
                <Button
                mode="contained"
                style={styles.button}
                color={Colors.highlightColor}
                labelStyle={styles.buttonContent}
                onPress={this.goToSignup.bind(this)}>
                New Here?
                </Button>
            </View>
        </View>
    );
  }

  login(){
    this.setState({
      loading: true
    });
    // Log in and display an alert to tell the user what happened.
    this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then((userData) =>
      {
        this.setState({
                loading: false
              });
              AsyncStorage.setItem('userData', JSON.stringify(userData));
              this.props.navigator.push({
                component: AccountScreen
              });
      }
    ).catch((error) =>
        {
              this.setState({
                loading: false
              });
        alert('Login Failed. Please try again'+error);
    });
  }

  // Go to the signup page
  goToSignup(){
    this.props.navigator.push({
      component: SignupScreen
    });
  }
}

AppRegistry.registerComponent('Login', () => LoginScreen);

LoginScreen.navigationOptions = (navData) => {
    return {
      headerTitle: 'Login',
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
      formSection: {
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
      headerText: {
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        fontSize: 16,
      },
      formInput: {
        width: width * 0.85,
        paddingTop: 7.5,
        paddingBottom: 7.5,
        backgroundColor: Colors.surfaceColor,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
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

export default LoginScreen;