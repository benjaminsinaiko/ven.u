import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/LoginModalStyles';
import { useAuth } from '../../contexts/authContext.js';
import { useUser } from '../../contexts/userContext.js';
import FacebookButton from './FacebookButton';

function LoginModal({ open, setOpen }) {
  const classes = useStyles();
  const { login, logout, register, fbLogin, fbLogout } = useAuth();

  const currentUser = useUser();
  const [isLogin, setIsLogIn] = useState(true);
  const [state, setState] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleLoginClick = () => {
    login(state.username, state.password);
  };

  const handleFacebookClick = () => {
    fbLogin();
    setOpen(false);
  };

  function handleClose() {
    setOpen(false);
  }

  console.log('currentUser', currentUser);

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography id="form-dialog-title" className={classes.title}>
          {isLogin ? 'Log In' : 'Sign Up'}
        </Typography>
        <DialogContent className={classes.form}>
          <TextField
            autoFocus
            onChange={handleChange('username')}
            margin="dense"
            label="Username*"
            type="text"
            fullWidth
          />
          <TextField
            onChange={handleChange('password')}
            margin="dense"
            label="Password*"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes.actionButtons}>
          <Button
            onClick={handleLoginClick}
            fullWidth
            variant="contained"
            className={classes.button}>
            Log In
          </Button>

          <FacebookButton handleClick={handleFacebookClick} />
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default LoginModal;
