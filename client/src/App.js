import React from 'react';

import AppProviders from './contexts/AppProviders';
import AppLanding from './AppLanding';

function App() {
  return (
    <AppProviders>
      <AppLanding />
    </AppProviders>
  );
}

export default App;
