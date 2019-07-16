import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute';

import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Privacy from './components/privacy/Privacy';
import LandingPage from './components/landing/LandingPage';
import UpcomingEventsPage from './components/upcomingEvents';
import AddEventsPage from './components/addEvents/AddEventsPage';

import AppProviders from './contexts/AppProviders';
import { EventsProvider } from './contexts/eventsContext';

function App() {
  return (
    <AppProviders>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <EventsProvider>
          <Route path="/events" component={UpcomingEventsPage} />
        </EventsProvider>
        {/* <PrivateRoute exact path="/add-events" component={AddEventsPage} /> */}
        <Route exact path="/add-events" component={AddEventsPage} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
      <Footer />
    </AppProviders>
  );
}

export default App;
