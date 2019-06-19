import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    '&:hover': {
      color: '#E48611'
    },
    margin: theme.spacing.unit * 2
  },
  text: {
    color: 'white'
  },
  links: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#E48611'
    }
  }
});

const Footer = props => {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <Grid container className={classes.text}>
        <Grid item sm={4} style={{ alignSelf: 'center' }}>
          <Link to="/" className={classes.links}>
            <img src={logoName} alt="logo" />
          </Link>
        </Grid>
        <Grid item sm={4} className={classes.social}>
          <a href="http://www.facebook.com/getvenu">
            <i className={`fab fa-facebook-f ${classes.socialIcons}`} />
          </a>
          <a href="http://www.twitter.com/venuCrew">
            <i className={`fab fa-twitter ${classes.socialIcons}`} />
          </a>
          <a href="http://www.instagram.com/venuCrew">
            <i className={`fab fa-instagram ${classes.socialIcons}`} />
          </a>
          <a href="mailto:hello@getvenu.com">
            <i className={`fas fa-at ${classes.socialIcons}`} />
          </a>
        </Grid>
        <Grid item sm={4}>
          <Typography className={classes.text} variant="body2">
            <Link to="/privacy" className={classes.links}>
              Privacy Policy
            </Link>
          </Typography>
          <Typography className={classes.text} variant="caption">
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
