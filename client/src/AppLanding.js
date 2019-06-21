import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Privacy from './components/privacy/Privacy';
import LandingPage from './components/landing/LandingPage';
import AddEventsPage from './components/addEvents/AddEventsPage';

function AppLanding() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/add-events" component={AddEventsPage} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
      <Footer />
    </div>
  );
}

export default AppLanding;
