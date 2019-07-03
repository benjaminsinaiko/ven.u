import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuth } from '../../contexts/authContext';
import { useUser } from '../../contexts/userContext.js';
import useStyles from './styles/NavbarStyles';
import logoName from '../../assets/navLogo.png';
import LoginForm from '../login/LoginModal';

function Navbar() {
  const classes = useStyles();

  const [loginOpen, setLoginOpen] = useState(false);
  const { logout } = useAuth();
  const currentUser = useUser();

  console.log('currentUser: ', currentUser);

  const handleLogin = () => {
    setLoginOpen(true);
  };

  const handleLogout = () => {
    logout();
  };

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
          {!currentUser.user ? (
            <Button onClick={handleLogin} color="inherit" variant="outlined">
              Login
            </Button>
          ) : (
            <Button onClick={handleLogout} color="inherit" variant="outlined">
              Logout
            </Button>
          )}
          <LoginForm open={loginOpen} setOpen={setLoginOpen} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
