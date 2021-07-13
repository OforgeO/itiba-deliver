import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC526oFH5Q0Gm7awdkL5ga1do7zhp9wflE",
    authDomain: "itiba-22c0d.firebaseapp.com",
    databaseURL: "https://itiba-22c0d-default-rtdb.firebaseio.com",
    projectId: "itiba-22c0d",
    storageBucket: "itiba-22c0d.appspot.com",
    messagingSenderId: "258588245321",
    appId: "1:258588245321:web:72b499d8ed7d8a413c2e98",
    measurementId: "G-WKP9DCC3C5"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
