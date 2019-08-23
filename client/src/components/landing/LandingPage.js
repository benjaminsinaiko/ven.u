import React from 'react';

import LandingHero from './LandingHero';
import LandingFeatures from './LandingFeatures';
import LandingEventsGrid from './LandingEventsGrid';
import LandingAppInfo from './LandingAppInfo';

function LandingPage() {
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
