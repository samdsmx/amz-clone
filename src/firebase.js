import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_YQ5msjoN-NtuY6gVSAxTKf-UWYmFViI",
    authDomain: "clone-98809.firebaseapp.com",
    projectId: "clone-98809",
    storageBucket: "clone-98809.appspot.com",
    messagingSenderId: "437577472401",
    appId: "1:437577472401:web:18b415679300b3f8386230",
    measurementId: "G-Y4LPX54QYZ"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider };