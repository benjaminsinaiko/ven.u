import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logoName from '../../assets/navLogo.png';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const NavBar = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#212121' }} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            style={{ color: 'white' }}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ color: 'white' }}
            align="left"
            className={classes.grow}
          >
            {<img src={logoName} alt="logo" style={{ zoom: '65%' }} />}
          </Typography>
          <Button variant="outlined" color="inherit" style={{ color: 'white' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
