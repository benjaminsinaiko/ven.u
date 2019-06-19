import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles/FooterStyles';
import logoName from '../../assets/navLogo.png';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Link to="/">
        <img src={logoName} alt="logo" className={classes.logo} />
      </Link>

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

      <div className={classes.legal}>
        <Typography variant="body2">
          <Link to="/privacy" className={classes.privacy}>
            Privacy Policy
          </Link>
        </Typography>
        <Typography variant="caption">&copy; {new Date().getFullYear()} Tunimal, LLC</Typography>
      </div>
    </footer>
  );
};

export default Footer;
