import React, { Component } from 'react';

import LandingHero from './LandingHero';
import LandingIconInfo from './LandingIconInfo';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingHero />
        <LandingIconInfo />
      </div>
    );
  }
}

export default LandingPage;
