//'use strict';
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

import Login from './LoginScreen';
//import styles from '../styles/mainstyle.js';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
const {width, height} = Dimensions.get('screen');

// Styles specific to the account page
const accountStyles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
});

class AccountScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:null,
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
    // If we are loading then we display the indicator, if the account is null and we are not loading
    // Then we display nothing. If the account is not null then we display the account info.
    const content = this.state.loading ?
    <ActivityIndicator size="large"/> :
       this.state.user &&
        <Content>
            <View style={accountStyles.email_container}>
                <Text style={accountStyles.email_text}>{this.state.user.email}</Text>
            </View>
            <Image
                style={styles.image}
                source={{uri: this.state.user.photoURL}} />
            <Button onPress={this.logout.bind(this)} style={styles.button}>
                Logout
            </Button>
        </Content>
      ;
      // console.log("loading user",this.state.user,this.state.loading);
    return (
    <Container>
        <Header>
            <Title>Header</Title>
        </Header>
        {content}
    </Container>
    );
  }

  logout() {
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
        this.props.firebaseApp.auth().signOut().then(() => {
            this.props.navigator.push({
                component: Login
            });
        });  
    });
  }
}

AppRegistry.registerComponent('Account', () => Account);

AccountScreen.navigationOptions = (navData) => {
    return {
      headerTitle: 'Account',
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

export default AccountScreen;