'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';
import { Header,Title,Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import Login from './LoginScreen';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import LoginScreen from './LoginScreen';
const {width, height} = Dimensions.get('screen');

class SignupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  // A method to passs the username and password to firebase and make a new user account
  signup() {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true
    });

    // Make a call to firebase to create a new user.
    this.props.firebaseApp.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        // then and catch are methods that we call on the Promise returned from
        // createUserWithEmailAndPassword
        alert('Your account was created!');
        this.setState({
          // Clear out the fields when the user logs in and hide the progress indicator.
          email: '',
          password: '',
          loading: false
        });
        this.props.navigator.push({
          component: LoginScreen
        });
    }).catch((error) => {
      // Leave the fields filled when an error occurs and hide the progress indicator.
      this.setState({
        loading: false
      });
      alert("Account creation failed: " + error.message );
    });
  }

  render() {
    return (
        <View style={styles.screen}>
            <View style={styles.headerSection}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.headerText}>to continue to UniLife</Text>
            </View>
            <View style={styles.mainSection}>
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
                onPress={this.signup.bind(this)}>
                Signup
                </Button>
                <Button
                mode="contained"
                style={styles.button}
                color={Colors.highlightColor}
                labelStyle={styles.buttonContent}
                onPress={this.goToLogin.bind(this)}>
                Already have an account?
                </Button>
            </View>
        </View>
    )
  }
  goToLogin(){
    this.props.navigator.push({
      component: LoginScreen
    });
  }
}

AppRegistry.registerComponent('Signup', () => SignupScreen);

SignupScreen.navigationOptions = (navData) => {
    return {
      headerTitle: 'Signup',
    };
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flex: 1
    },
    body: {
      flex: 9,
      flexDirection:'row',
      justifyContent: 'center',
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

export default SignupScreen;