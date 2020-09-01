import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSX4HLMsZtlKfrBUWhmnpX3_IBlqmKRO8",
    authDomain: "crwn-clothing-22d4e.firebaseapp.com",
    databaseURL: "https://crwn-clothing-22d4e.firebaseio.com",
    projectId: "crwn-clothing-22d4e",
    storageBucket: "crwn-clothing-22d4e.appspot.com",
    messagingSenderId: "272497217682",
    appId: "1:272497217682:web:d5b5312506a8eb2c1cd64b",
    measurementId: "G-1FDVMGKRKT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'})

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;