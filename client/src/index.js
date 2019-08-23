import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Parse from 'parse';
import App from './App';
import * as serviceWorker from './serviceWorker';
import facebookInit from './api/facebookIinit';

// Initialize Parse
Parse.initialize(process.env.REACT_APP_APP_ID, process.env.REACT_APP_JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';
// Load Facebook SDK
facebookInit();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
