import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  loginButton: {
    boxSizing: 'border-box',
    position: 'relative',
    /* width: 13em,  - apply for fixed size */
    margin: '0.2em',
    padding: '0 15px 0 46px',
    border: 'none',
    textAlign: 'left',
    lineHeight: '34px',
    whiteSpace: 'nowrap',
    borderRadius: '0.2em',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#4C69BA',
    backgroundImage: 'linear-gradient(#4C69BA, #3B55A0)',
    fontFamily: ['Helvetica neue', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    textShadow: ' 0 -1px 0 #354C8C',
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      boxShadow: 'inset 0 0 0 32px rgba(0,0,0,0.1)'
    },
    '&:before': {
      borderRight: '#364e92 1px solid',
      background: '6px 6px no-repeat',
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png)'
    },
    '&:hover': {
      backgroundColor: '#5b7bd5',
      backgroundImage: 'linear-gradient(#5b7bd5, #4864b1)'
    }
  }
}));

export default function FacebookButton({ handleClick }) {
  const classes = useStyles();
  return (
    <button onClick={handleClick} className={classes.loginButton}>
      Login with Facebook
    </button>
  );
}
