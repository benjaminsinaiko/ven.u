import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#d9e2ec',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '83vh'
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
  select: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'flex-end',
      marginRight: '30px'
    }
  },
  eventsDisplay: {
    display: 'flex',
    maxWidth: '1000px',
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
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  addForm: {
    marginLeft: theme.spacing(3),
    backgroundColor: '#8dca89'
  }
}));

export default useStyles;
