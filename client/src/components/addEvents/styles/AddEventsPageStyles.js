import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#d9e2ec',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '82vh'
  },
  eventsDisplay: {
    display: 'flex',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  eventsHeader: {
    fontSize: '1.5rem'
  }
}));

export default useStyles;
