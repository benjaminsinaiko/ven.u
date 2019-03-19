import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LandingHero from './LandingHero';

class LandingPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <LandingHero />
      </div>
    );
  }
}

export default LandingPage;
