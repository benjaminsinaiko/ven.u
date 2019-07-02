import React, { useState, useEffect } from 'react';
import Parse from 'parse';

import { useUser } from './contexts/userContext';
import AppLanding from './AppLanding';

import init from './api/facebookIinit';
import './App.css';
// import { getCurrentUser } from './api/parseApi';
// Parse.initialize(process.env.REACT_APP_APP_ID, process.env.REACT_APP_JS_KEY);
// Parse.serverURL = 'https://parseapi.back4app.com/';

function App() {
  const [currentUser, setCurrentUser] = useState();

  const user = useUser();

  // console.log('useUser:', user);

  // Load Facebook SDK
  useEffect(() => {
    init();
  }, []);

  // useEffect(() => {
  //   setCurrentUser(getCurrentUser());
  //   console.log('currentUser', currentUser);
  // }, [currentUser]);

  return <AppLanding />;
}

export default App;
