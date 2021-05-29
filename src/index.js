import React from 'react';
import ReactDom from 'react-dom';
import {App} from './App';
import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBBaA7zoCg21aRpnvpuAN728_Qfd9K9zWM",
    authDomain: "todolist-ca051.firebaseapp.com",
    projectId: "todolist-ca051",
    storageBucket: "todolist-ca051.appspot.com",
    messagingSenderId: "646142315728",
    appId: "1:646142315728:web:2f34c657877b98dfbe22d5",
    measurementId: "G-LXPH6SVKZL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


ReactDom.render(<App/>,document.getElementById("root"));
