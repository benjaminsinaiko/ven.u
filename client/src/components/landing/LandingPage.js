import React, { Component } from 'react';

import LandingHero from './LandingHero';
import LandingIconInfo from './LandingIconInfo';
import LandingFeatures from './LandingFeatures';
import LandingAppInfo from './LandingAppInfo';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingHero />
        {/* <LandingIconInfo /> */}
        <LandingFeatures />
        <LandingAppInfo />
      </div>
    );
  }
}

export default LandingPage;
