import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  eventsDisplay: {
    display: 'flex',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}));

export default useStyles;