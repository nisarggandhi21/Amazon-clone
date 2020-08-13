import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCucnizNnguROgYc5ABqP0DrGfXJ-OrwoA",
  authDomain: "clone-c88e4.firebaseapp.com",
  databaseURL: "https://clone-c88e4.firebaseio.com",
  projectId: "clone-c88e4",
  storageBucket: "clone-c88e4.appspot.com",
  messagingSenderId: "903041574058",
  appId: "1:903041574058:web:cf8abdb60c4c31b7a65cd3",
  measurementId: "G-03JX8J0LVG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
