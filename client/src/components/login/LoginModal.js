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
  const { login, signUp } = useAuth();

  const [isLoginForm, setIsLogInForm] = useState(true);
  const formText = isLoginForm ? 'Log In' : 'Sign Up';
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    email: null,
    password: null
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
    setErrors({ email: null, password: null });
  };

  const handleLogin = async e => {
    e.preventDefault();
    const response = await login(state.email, state.password);
    if (response instanceof Error) {
      console.log(response.code, response.message);
      response.code === 201
        ? setErrors({ ...errors, password: response.message })
        : setErrors({ ...errors, email: response.message });
    } else {
      setOpen(false);
    }
  };

  const handleSignUp = async e => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      setErrors({ ...errors, password: 'Passwords do not match' });
      return;
    }
    const response = await signUp(state.email, state.password);
    if (response instanceof Error) {
      console.log(response.code, response.message);
      setErrors({ ...errors, email: response.message });
    } else {
      setOpen(false);
    }
  };

  function handleClose() {
    setOpen(false);
    setIsLogInForm(true);
    setState({ email: '', password: '', confirmPassword: '' });
  }

  function handleSignUpToggle() {
    setIsLogInForm(!isLoginForm);
    setState({ email: '', password: '', confirmPassword: '' });
    setErrors({ email: null, password: null });
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
        <form onSubmit={isLoginForm ? handleLogin : handleSignUp} className={classes.form}>
          <DialogContent>
            <TextField
              autoFocus
              label="Email"
              value={state.email}
              type="text"
              autoComplete="email"
              onChange={handleChange('email')}
              helperText={errors.email}
              required
              fullWidth
              margin="dense"
              error={errors.email !== null}
            />
            <TextField
              label="Password"
              value={state.password}
              type="password"
              autoComplete="password"
              onChange={handleChange('password')}
              required
              fullWidth
              margin="dense"
            />
            {!isLoginForm && (
              <TextField
                label="Confirm Password"
                value={state.confirmPassword}
                type="password"
                onChange={handleChange('confirmPassword')}
                helperText={errors.password}
                required
                fullWidth
                margin="dense"
                error={errors.password !== null}
              />
            )}
          </DialogContent>
          <DialogActions className={classes.actionButtons}>
            <Button type="submit" variant="contained" className={classes.loginButton}>
              {formText}
            </Button>
            <FacebookButton setOpen={setOpen} />
          </DialogActions>
        </form>
        <Button onClick={handleSignUpToggle} className={classes.signUpButton}>
          {formText === 'Log In' ? 'Sign Up' : 'Log In'}
        </Button>
      </div>
    </Dialog>
  );
}

export default LoginModal;
