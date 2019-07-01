import React from 'react';
import Parse from 'parse';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import useStyles from './styles/NavbarStyles';
import logoName from '../../assets/navLogo.png';

function Navbar() {
  const classes = useStyles();

  const handleClick = async () => {
    try {
      const user = await Parse.FacebookUtils.logIn();
      if (!user.existed()) {
        console.log(
          'User created successful with name: ' +
            user.get('username') +
            ' and email: ' +
            user.get('email')
        );
        alert('User signed up and logged in through Facebook');
      } else {
        console.log('user', user);
        alert('User loggin in through Facebook!');
      }
    } catch (e) {
      alert('User cacelled the Facebook login or did not fully authorize.');
    }
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
          <Button onClick={handleClick} color="inherit" variant="outlined">
            Login
          </Button>
          <Dialog open aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send
                updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary">Cancel</Button>
              <Button color="primary">Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
