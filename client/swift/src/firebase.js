import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCORtuV7hWsFg3vodQgwBDXq0WOWHvq1g",
    authDomain: "swift-16.firebaseapp.com",
    projectId: "swift-16",
    storageBucket: "swift-16.appspot.com",
    messagingSenderId: "40342285096",
    appId: "1:40342285096:web:9fa9227238ac121347be1d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export default db;
export {auth};