import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Privacy from '../privacy/Privacy';
import LandingPage from './LandingPage';

function AppLanding() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
      <Footer />
    </div>
  );
}

export default AppLanding;
