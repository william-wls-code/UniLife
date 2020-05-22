import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
} from 'react-native';
import DefaultText from '../components/DefaultText';
import {firebase} from '@react-native-firebase/app';
import {firestore} from '../config/FirebaseConfig';
import '@react-native-firebase/firestore';
import '@react-native-firebase/database';

import Colors from '../constants/Colors';

const {width, height} = Dimensions.get('screen');

class FeedbackScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      subject: '',
      message: '',
    };
  }

  updateInput(name, value) {
    this.setState(() => ({[name]: value}));
  }

  addFeedback = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const db = firebase.firestore();
    const feedbackRef = db.collection('feedback').add({
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    });
    this.setState({
      email: '',
      subject: '',
      message: '',
    });
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Send Us Your Feedback!</Text>
          <Text style={styles.headerText}>Do you have any suggestion?</Text>
          <Text style={styles.headerText}>
            Let us know in the content below.
          </Text>
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
            label="Subject"
            returnKeyType="next"
            value={this.state.subject}
            onChangeText={(text) => this.updateInput('subject', text)}
            autoCapitalize="none"
            autoCompleteType="off"
            textContentType="none"
            keyboardType="default"
            style={styles.formInput}
            underlineColor={Colors.secondaryColor}
            theme={{colors: {primary: Colors.highlightColor}}}
          />
          <TextInput
            label="Message"
            returnKeyType="next"
            value={this.state.message}
            onChangeText={(text) => this.updateInput('message', text)}
            multiline={true}
            numberOfLines={5}
            autoCapitalize="none"
            autoCompleteType="off"
            textContentType="none"
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
            onPress={this.addFeedback}>
            Submit
          </Button>
        </View>
      </View>
    );
  }
}

FeedbackScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Feedback',
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

export default FeedbackScreen;
