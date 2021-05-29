import React from 'react';
import ReactDom from 'react-dom';
import {App} from './App';
import firebase from 'firebase';


  firebase.analytics();


ReactDom.render(<App/>,document.getElementById("root"));
