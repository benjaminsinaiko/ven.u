import React from 'react';
import { Grid, Typography, Card, CardMedia, ButtonBase } from '@material-ui/core';

import useStyles from './styles/LandingAppInfoStyles';
import discoverImage from '../../assets/discoverImage.png';
import artistImage from '../../assets/artistImage.png';
import venueImage from '../../assets/venueImage.png';
import historyImage from '../../assets/historyImage.png';

const LandingAppInfo = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header} gutterBottom>
        Chicago's best live music companion app.
      </Typography>

      <Grid container className={classes.grid} spacing={16}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card} raised>
            <CardMedia component="img" image={discoverImage} title="Discover" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card} raised>
            <CardMedia component="img" image={artistImage} title="Artist info" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card} raised>
            <CardMedia component="img" image={venueImage} title="Venue info" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card} raised>
            <CardMedia component="img" image={historyImage} title="Show history" />
          </Card>
        </Grid>
      </Grid>

      <ButtonBase
        className={classes.appButton}
        href="https://itunes.apple.com/us/app/ven-u/id1027450596"
        target="blank"
      />
    </div>
  );
};

export default LandingAppInfo;
