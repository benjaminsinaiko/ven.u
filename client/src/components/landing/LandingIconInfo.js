import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import discoverIcon from '../../assets/discoverIcon.png';
import seeIcon from '../../assets/seeIcon.png';
import reliveIcon from '../../assets/reliveIcon.png';

const styles = {
  paper: {
    margin: 20,
    padding: 20
  }
};

const LandingIconInfo = props => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={40} justify="center" alignItems="center">
        <Grid item sm={4}>
          <Typography variant="h4">Discover</Typography>
          <img src={discoverIcon} alt="discover icon" align="center" />
          <Typography variant="subtitle1">
            Find live music around you.
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h4">See</Typography>
          <img src={seeIcon} alt="see icon" />
          <Typography variant="subtitle1">Enjoy the show.</Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h4">Relive</Typography>
          <img src={reliveIcon} alt="relive icon" />
          <Typography variant="subtitle1">
            Look back at the memories.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(LandingIconInfo);
