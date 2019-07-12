import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#d9e2ec',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '83vh'
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
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2)
  },
  eventsColumn: {
    maxHeight: '74vh',
    overflow: 'scroll'
  },
  fab: {
    width: '170px',
    margin: theme.spacing(1),
    backgroundColor: '#f0c04a',
    top: 80,
    bottom: 'auto',
    left: 20,
    right: 'auto',
    position: 'fixed'
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  addForm: {
    marginLeft: theme.spacing(3),
    backgroundColor: '#8dca89'
  }
}));

export default useStyles;
