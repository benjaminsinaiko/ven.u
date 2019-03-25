import React from 'react';
import { Grid, Typography, Card, CardMedia, Button } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import discoverImage from '../../assets/discoverImage.png';
import artistImage from '../../assets/artistImage.png';
import venueImage from '../../assets/venueImage.png';
import historyImage from '../../assets/historyImage.png';
import downloadAppStore from '../../assets/downloadAppStore.png';

const styles = theme => ({
  root: {
    background: 'linear-gradient( #CFD8DC, #CFD8DC 60%, #5284AD)',
    paddingTop: 50,
    paddingBottom: 20,
  },
  grid: {
    maxWidth: 1200,
    margin: 'auto',
  },
  card: {
    maxHeight: 500,
    maxWidth: 281.25,
    [theme.breakpoints.down('md')]: {
      maxHeight: 400,
      maxWidth: 225,
    },
    margin: '20px auto',
  },
  media: {
    height: '100%',
    width: '100%',
  },
  appButton: {
    backgroundImage: `url(${downloadAppStore})`,
    width: 135,
    height: 40,
  },
});

const LandingAppInfo = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        The best companion app for live music fans in Chicago.
      </Typography>

      <Grid container className={classes.grid} spacing={16}>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={discoverImage}
              title="Discover"
            />
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={artistImage}
              title="Artist info"
            />
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={venueImage}
              title="Venue info"
            />
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={historyImage}
              title="Show history"
            />
          </Card>
        </Grid>
      </Grid>

      <Button className={classes.appButton} />
    </div>
  );
};

export default withStyles(styles)(LandingAppInfo);
