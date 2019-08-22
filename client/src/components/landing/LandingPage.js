import React, { useContext } from 'react';

// import { EventsContext } from '../../contexts/eventsContext';
import LandingHero from './LandingHero';
import LandingFeatures from './LandingFeatures';
import LandingEventsGrid from './LandingEventsGrid';
import LandingAppInfo from './LandingAppInfo';

function LandingPage() {
  // const { events, loading } = useContext(EventsContext);
  return (
    <div>
      <LandingHero />
      <LandingFeatures />
      <LandingEventsGrid />
      <LandingAppInfo />
    </div>
  );
}

export default LandingPage;
