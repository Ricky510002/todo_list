import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBaA7zoCg21aRpnvpuAN728_Qfd9K9zWM",
  authDomain: "todolist-ca051.firebaseapp.com",
  projectId: "todolist-ca051",
  storageBucket: "todolist-ca051.appspot.com",
  messagingSenderId: "646142315728",
  appId: "1:646142315728:web:2f34c657877b98dfbe22d5",
  measurementId: "G-LXPH6SVKZL"
};

const firebaseApp = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };