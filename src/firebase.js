//latest version use imports like below
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi-3WWB6WS53K5lqnPm99Jo9BEVra8Hyc",
  authDomain: "cart-85b32.firebaseapp.com",
  projectId: "cart-85b32",
  storageBucket: "cart-85b32.appspot.com",
  messagingSenderId: "264841033732",
  appId: "1:264841033732:web:ab3511ca2fd1c7b2459d51"
};

//latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();