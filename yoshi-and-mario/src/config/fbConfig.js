import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBER6IQ1QJZQEdGzictxmivxA4-qgp2D74",
    authDomain: "keem-the-dream-marioplan.firebaseapp.com",
    databaseURL: "https://keem-the-dream-marioplan.firebaseio.com",
    projectId: "keem-the-dream-marioplan",
    storageBucket: "keem-the-dream-marioplan.appspot.com",
    messagingSenderId: "510402020333",
    appId: "1:510402020333:web:233a79aed2a6c1518f9de4",
    measurementId: "G-HFZBSHSCSX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();

  export default firsebase;