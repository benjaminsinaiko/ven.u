import React, { Component } from 'react';

import LandingHero from './LandingHero';
import LandingFeatures from './LandingFeatures';
import LandingAppInfo from './LandingAppInfo';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingHero />
        <LandingFeatures />
        <LandingAppInfo />
      </div>
    );
  }
}

export default LandingPage;
