import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import discoverIcon from '../../assets/iconDiscover.png';
import seeIcon from '../../assets/iconSee.png';
import reliveIcon from '../../assets/iconRelive.png';

const styles = {
  paper: {
    margin: '-40px auto 20px auto',
    padding: '50px 20px',
    maxWidth: 1000,
  },
};

const LandingIconInfo = props => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" sytle={{ fontWeight: 500 }} gutterBottom>
        You love the music. You've seen the show. Look back and get more.
      </Typography>
      <Grid container spacing={40} justify="center" alignItems="center">
        <Grid item sm={4}>
          <img src={discoverIcon} alt="discover icon" align="center" />
          <Typography variant="h5">Discover</Typography>
          <Typography variant="body1">Find live music around you.</Typography>
        </Grid>
        <Grid item sm={4}>
          <img src={seeIcon} alt="see icon" />
          <Typography variant="h5">See</Typography>
          <Typography variant="body1">Enjoy the show.</Typography>
        </Grid>
        <Grid item sm={4}>
          <img src={reliveIcon} alt="relive icon" />
          <Typography variant="h5">Relive</Typography>
          <Typography variant="body1">Look back at the memories.</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(LandingIconInfo);
