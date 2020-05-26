//'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  AsyncStorage,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';

import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import Signup from './SignupScreen';
//import Account from './Main'
//import styles from '../styles/mainstyle.js';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
const {width, height} = Dimensions.get('screen');

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ?
    <View style={styles.body}>
    <ActivityIndicator size="large"/>
    </View> :
    <Content>
        <List>
            <ListItem>
                <InputGroup>
                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                <Input
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
                placeholder={"Email Address"} />
                </InputGroup>
        </ListItem>
        <ListItem>
            <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
            <Input
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                secureTextEntry={true}
                placeholder={"Password"} />
            </InputGroup>
        </ListItem>
        </List>
        <Button style={styles.button} onPress={this.login.bind(this)}>
        Login
        </Button>
        <Button onPress={this.goToSignup.bind(this)} style={styles.button}>
        New Here?
        </Button>
    </Content>
        ;

    // A simple UI with a toolbar, and content below it.
    return (
        <Container>
            <Header>
                <Title>Login</Title>
            </Header>
        {content}
    </Container>
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
                component: Account
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
      component: Signup
    });
  }
}

AppRegistry.registerComponent('Login', () => Login);

LoginScreen.navigationOptions = (navData) => {
    return {
      headerTitle: 'Login',
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
    Button: {
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