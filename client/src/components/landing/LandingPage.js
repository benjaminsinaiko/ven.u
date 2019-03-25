import React, { Component } from 'react';

import LandingHero from './LandingHero';
import LandingIconInfo from './LandingIconInfo';
import LandingAppInfo from './LandingAppInfo';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingHero />
        <LandingIconInfo />
        <LandingAppInfo />
      </div>
    );
  }
}

export default LandingPage;
