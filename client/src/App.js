import React, { useState, useEffect } from 'react';

import { useUser } from './contexts/userContext';
import AppLanding from './AppLanding';

import init from './api/init';
import './App.css';
import { getCurrentUser } from './api/parseApi';

function App() {
  const [currentUser, setCurrentUser] = useState();

  const user = useUser();

  console.log('useUser:', user);

  // Load Facebook SDK
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
    console.log('currentUser', currentUser);
  }, [currentUser]);

  return <AppLanding />;
}

export default App;
