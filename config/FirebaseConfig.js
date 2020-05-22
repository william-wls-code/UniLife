import {firebase} from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/database';

//import Config from 'react-native-config';

const config = {
  apiKey: 'AIzaSyB4myCqfkVfgBhRMggYrH95bECkQ1Gf_7w',
  authDomain: 'comp4521-df3c9.firebaseapp.com',
  databaseURL: 'https://comp4521-df3c9.firebaseio.com',
  projectId: 'comp4521-df3c9',
  storageBucket: 'comp4521-df3c9.appspot.com',
  messagingSenderId: '533319386495',
  appId: '1:533319386495:web:e6768c5a016668ca4dc64a',
  measurementId: 'G-Y03HXNG1WE',
};
//firebase.initializeApp(config);
//export default firebase.database();
export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase;
