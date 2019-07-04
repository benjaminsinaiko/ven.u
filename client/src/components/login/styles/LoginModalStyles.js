import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '500px'
  },
  title: {
    marginTop: theme.spacing(1),
    fontSize: '1.5rem',
    fontWeight: 400
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'column'
  },
  loginButton: {
    backgroundColor: '#f0c04a',
    margin: theme.spacing(1),
    width: '55%'
  },
  signUpButton: {
    display: 'flex',
    alignSelf: 'flex-end',
    fontSize: '.8em',
    color: theme.palette.secondary.main
  }
}));

export default useStyles;
