import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { useAuth } from '../../contexts/authContext';
import { useUser } from '../../contexts/userContext.js';
import useStyles from './styles/NavbarStyles';
import logoName from '../../assets/navLogo.png';
import LoginForm from '../login/LoginModal';

function Navbar() {
  const classes = useStyles();

  const [loginOpen, setLoginOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useAuth();
  const currentUser = useUser();
  const menuOpen = Boolean(anchorEl);

  console.log('currentUser: ', currentUser);

  const handleLogin = () => {
    setLoginOpen(true);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
  };

  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.logo}>
            <Link to="/">{<img src={logoName} alt="logo" />}</Link>
          </Typography>
          {!currentUser.user ? (
            <Button onClick={handleLogin} color="inherit" variant="outlined">
              Login
            </Button>
          ) : (
            <div>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={menuOpen}
                onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>

            // <Button onClick={handleLogout} color="inherit" variant="outlined">
            //   Logout
            // </Button>
          )}
          <LoginForm open={loginOpen} setOpen={setLoginOpen} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
