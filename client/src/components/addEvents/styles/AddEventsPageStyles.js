import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#d9e2ec',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '82vh'
  },
  select: {
    marginTop: theme.spacing(2)
  },
  eventsDisplay: {
    display: 'flex',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  eventsHeader: {
    fontSize: '1.5rem'
  },
  upcomingEvents: {
    maxHeight: '81vh',
    overflow: 'scroll'
  },
  fab: {
    width: '170px',
    margin: theme.spacing(1),
    backgroundColor: '#f0c04a'
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default useStyles;
