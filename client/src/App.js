import React from 'react';
import Parse from 'parse';

import facebookInit from './api/facebookIinit';
import AppProviders from './contexts/AppProviders';
import AppLanding from './AppLanding';

// Initialize Parse
Parse.initialize(process.env.REACT_APP_APP_ID, process.env.REACT_APP_JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';
// Load Facebook SDK
facebookInit();

function App() {
  return (
    <AppProviders>
      <AppLanding />
    </AppProviders>
  );
}

export default App;
