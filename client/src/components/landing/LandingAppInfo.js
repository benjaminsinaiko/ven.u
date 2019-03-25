import React from 'react';
import { Grid, Typography, Card, CardMedia } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import discoverImage from '../../assets/discoverImage.png';

const styles = theme => ({
  root: {
    backgroundColor: '#E9E8E8',
    padding: 20,
  },
  grid: {
    maxWidth: 900,
    margin: 'auto',
  },
  card: {
    maxHeight: 600,
    maxWidth: 337.5,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 400,
      maxWidth: 225,
    },
    margin: 'auto',
  },
  media: {
    height: '100%',
    width: '100%',
  },
});

const LandingAppInfo = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Get the app
      </Typography>

      <Grid container className={classes.grid} spacing={24}>
        <Grid item sm={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={discoverImage}
            />
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={discoverImage}
            />
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={discoverImage}
            />
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={discoverImage}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(LandingAppInfo);
