//'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';
import { Header,Title,Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import Login from './LoginScreen';
//import styles from '../styles/mainstyle.js';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
const {width, height} = Dimensions.get('screen');

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // used to display a progress indicator if waiting for a network response.
      loading: false,
      // entered credentials
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
          component: Login
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
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
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
            <Button style={styles.button} onPress={this.signup.bind(this)}>
            Signup
            </Button>
            <Button onPress={this.goToLogin.bind(this)} style={styles.button}>
            Go to Login
            </Button>
        </Content>
    ;
    // A simple UI with a toolbar, and content below it.
    return (
        <Container>
            <Header>
                <Title>Sign Up</Title>
            </Header>
            {content}
        </Container>
    )
  }
  goToLogin(){
    this.props.navigator.push({
      component: Login
    });
  }
}

AppRegistry.registerComponent('Signup', () => Signup);

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