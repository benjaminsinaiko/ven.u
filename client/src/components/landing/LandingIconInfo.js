import React from 'react';
import { Paper } from '@material-ui/core';

import useStyles from './styles/LandingIconInfoStyles';
import discoverIcon from '../../assets/iconDiscover.png';
import seeIcon from '../../assets/iconSee.png';
import reliveIcon from '../../assets/iconRelive.png';

const LandingIconInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.title}>
          <span>You love the music. </span> <span> You've seen the show. </span>
          <span> Look back and get more.</span>
        </div>

        <div className={classes.iconsGroup}>
          <div className={classes.icons}>
            <img src={discoverIcon} alt="discover icon" />
            <h4>Discover</h4>
            <p>Find live music around you.</p>
          </div>
          <div className={classes.icons}>
            <img src={seeIcon} alt="see icon" />
            <h4>See</h4>
            <p>Enjoy the show.</p>
          </div>
          <div className={classes.icons}>
            <img src={reliveIcon} alt="relive icon" />
            <h4>Relive</h4>
            <p>Look back at the memories.</p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default LandingIconInfo;
