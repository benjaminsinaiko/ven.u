import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  form: {
    width: '90%',
    padding: theme.spacing(1)
  },
  timePickers: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  actionButtons: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  removeForm: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default useStyles;
