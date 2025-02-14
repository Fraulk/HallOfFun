import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import firebaseConfig from "./firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/database"

const history = createBrowserHistory();

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.database();

ReactDOM.render(
  <React.StrictMode>
    <Router {...{ history }}>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
