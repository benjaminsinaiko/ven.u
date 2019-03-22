import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import logoName from '../../assets/navLogo.png';

const styles = theme => ({
  root: {
    backgroundColor: '#212121',
    padding: theme.spacing.unit * 3
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  socialIcons: {
    color: 'white',
    margin: theme.spacing.unit * 2
  },
  text: {
    color: 'white'
  }
});

const Footer = props => {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <Grid container className={classes.text}>
        <Grid item sm={4} style={{ alignSelf: 'center' }}>
          <img src={logoName} alt="logo" />
        </Grid>
        <Grid item className={classes.social} sm={4}>
          <i className={`fab fa-facebook-f ${classes.socialIcons}`} />
          <i className={`fab fa-twitter ${classes.socialIcons}`} />
          <i className={`fab fa-instagram ${classes.socialIcons}`} />
          <i className={`fas fa-at ${classes.socialIcons}`} />
        </Grid>
        <Grid item sm={4}>
          <Typography className={classes.text} variant="body2">
            Privacy policy
          </Typography>
          <Typography className={classes.text} variant="body2">
            &copy; {new Date().getFullYear()} Tunimal, LLC
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
