import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';

import useStyles from './styles/LandingIconInfoStyles';
import discoverIcon from '../../assets/iconDiscover.png';
import seeIcon from '../../assets/iconSee.png';
import reliveIcon from '../../assets/iconRelive.png';

const LandingIconInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} raised>
        <Typography className={classes.title}>
          You love the music. You've seen the show. Look back and get more.
        </Typography>

        <Grid container alignItems="center" className={classes.iconsGroup}>
          <Grid item xs={12} sm={4} className={classes.icons}>
            <img src={discoverIcon} alt="discover icon" align="center" />
            <Typography variant="h5">Discover</Typography>
            <Typography variant="body1">Find live music around you.</Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.icons}>
            <img src={seeIcon} alt="see icon" />
            <Typography variant="h5">See</Typography>
            <Typography variant="body1">Enjoy the show.</Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.icons}>
            <img src={reliveIcon} alt="relive icon" />
            <Typography variant="h5">Relive</Typography>
            <Typography variant="body1">Look back at the memories.</Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default LandingIconInfo;
