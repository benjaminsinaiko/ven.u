import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import heroImage from '../../assets/heroBackground.svg';
import logoIcon from '../../assets/logoIcon.png';

const styles = theme => ({
  heroUnit: {
    background: `url(${heroImage})`
    // background: 'linear-gradient(to right top, #E48611, #F9C851)'
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroLogo: {
    marginBottom: theme.spacing.unit * 4
  }
});

const LandingHero = props => {
  const { classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <div className={classes.heroLogo}>
          <Grid container spacine={16} alignItems="center" justify="center">
            <Grid item>
              <img src={logoIcon} alt="Logo icon" style={{ zoom: '75%' }} />
            </Grid>
          </Grid>
        </div>
        <Typography
          component="h1"
          variant="h3"
          align="left"
          style={{ color: 'white', fontWeight: '500' }}
          gutterBottom
        >
          get more from your shows
        </Typography>
        <Typography
          variant="h6"
          align="left"
          style={{ color: 'white' }}
          paragraph
        >
          Discover who's coming to town, see them live, relive the moment.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(LandingHero);
