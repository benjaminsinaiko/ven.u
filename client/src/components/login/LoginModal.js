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
import FacebookButton from './FacebookButton';

function LoginModal({ open, setOpen }) {
  const classes = useStyles();
  const { login, register, fbLogin } = useAuth();

  const [isLoginForm, setIsLogInForm] = useState(true);
  const formText = isLoginForm ? 'Log In' : 'Sign Up';
  const [state, setState] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleLoginClick = async () => {
    const user = await login(state.username, state.password);
    console.log('logged in', user);
    if (user) setOpen(false);
  };

  const handleSignUpClick = async () => {
    const user = await register(state.username, state.password, state.email);
    if (user) setOpen(false);
  };

  const handleFacebookClick = () => {
    fbLogin();
    setOpen(false);
  };

  function handleClose() {
    setOpen(false);
  }

  function handleSignUpToggle() {
    setIsLogInForm(!isLoginForm);
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography id="form-dialog-title" className={classes.title}>
          {formText}
        </Typography>
        <DialogContent className={classes.form}>
          <TextField
            autoFocus
            onChange={handleChange('username')}
            margin="dense"
            label="Username*"
            type="text"
            autoComplete="username"
            fullWidth
          />
          <TextField
            onChange={handleChange('password')}
            margin="dense"
            label="Password*"
            type="password"
            autoComplete="password"
            fullWidth
          />
          {!isLoginForm && (
            <TextField
              onChange={handleChange('email')}
              margin="dense"
              label="Email"
              type="email"
              autoComplete="email"
              fullWidth
            />
          )}
        </DialogContent>
        <DialogActions className={classes.actionButtons}>
          <Button
            onClick={isLoginForm ? handleLoginClick : handleSignUpClick}
            fullWidth
            variant="contained"
            className={classes.button}>
            {formText}
          </Button>

          <FacebookButton handleClick={handleFacebookClick} />
        </DialogActions>

        <Button onClick={handleSignUpToggle} className={classes.signUpButton}>
          {formText === 'Log In' ? 'Sign Up' : 'Log In'}
        </Button>
      </div>
    </Dialog>
  );
}

export default LoginModal;
