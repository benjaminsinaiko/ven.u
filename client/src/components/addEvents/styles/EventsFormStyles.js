import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  form: {
    padding: theme.spacing(1)
  },
  timePickers: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: '#f0c04a',
    marginTop: theme.spacing(2)
  }
}));

export default useStyles;
