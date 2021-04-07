//Import firebase!
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBB2-LFGbhnPngwjgag7IJVj9tIcutVfS8",
    authDomain: "phillips-first-firebase.firebaseapp.com",
    databaseURL: "https://phillips-first-firebase-default-rtdb.firebaseio.com",
    projectId: "phillips-first-firebase",
    storageBucket: "phillips-first-firebase.appspot.com",
    messagingSenderId: "5140102907",
    appId: "1:5140102907:web:8c52ff1791fe42aa863a5e"
  }

firebase.initializeApp(config);

function getFirebaseRef(refPath) {
    return firebase.database().ref(refPath);
  }
  
  export default {
    getFirebaseRef: getFirebaseRef
  };