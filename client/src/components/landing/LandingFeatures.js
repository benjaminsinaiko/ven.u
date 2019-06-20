import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core/';
import PlaceIcon from '@material-ui/icons/Place';
import TicketIcon from '@material-ui/icons/LocalPlay';
import EventIcon from '@material-ui/icons/EventAvailable';
import RewindIcon from '@material-ui/icons/FastRewind';

import useStyles from './styles/LandingFeaturesStyles';

function LandingFeatures() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.featuresTitle}>
        You love the music. You've seen the show. Look back and get more.
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={6} sm={3} className={classes.gridItem}>
          <Avatar className={classes.avatar}>
            <TicketIcon />
          </Avatar>
          <Typography className={classes.header}>Find Shows</Typography>
          <Typography className={classes.body}>
            Your favorite artists or one's that will be, find them all with Ven.u
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.gridItem}>
          <Avatar className={classes.avatar}>
            <PlaceIcon />
          </Avatar>
          <Typography className={classes.header}>Know Your Venues</Typography>
          <Typography className={classes.body}>
            Learn more about your local venues. Capacity, ages, cash or credit, and descriptions
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.gridItem}>
          <Avatar className={classes.avatar}>
            <EventIcon />
          </Avatar>
          <Typography className={classes.header}>Add to Calendar</Typography>
          <Typography className={classes.body}>
            Whether you bought tickets or are thinking about going, don't forget the date!
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.gridItem}>
          <Avatar className={classes.avatar}>
            <RewindIcon />
          </Avatar>
          <Typography className={classes.header}>Look Back</Typography>
          <Typography className={classes.body}>
            When was that show? Who opened? What songs did they play? Now you know
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingFeatures;
