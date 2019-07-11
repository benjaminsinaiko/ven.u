import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#d9e2ec',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '93vh'
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
    maxHeight: '71vh',
    overflow: 'scroll'
  },
  fab: {
    width: '170px',
    margin: theme.spacing(1),
    backgroundColor: '#f0c04a'
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
