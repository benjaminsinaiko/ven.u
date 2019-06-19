import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles/NavbarStyles';
import logoName from '../../assets/navLogo.png';

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.logo}>
            {<img src={logoName} alt="logo" />}
          </Typography>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
