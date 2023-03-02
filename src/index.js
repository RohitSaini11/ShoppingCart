import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi-3WWB6WS53K5lqnPm99Jo9BEVra8Hyc",
  authDomain: "cart-85b32.firebaseapp.com",
  projectId: "cart-85b32",
  storageBucket: "cart-85b32.appspot.com",
  messagingSenderId: "264841033732",
  appId: "1:264841033732:web:ab3511ca2fd1c7b2459d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


