import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 400,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 'auto'
    }
  },
  featuresTitle: {
    fontSize: '1.4rem',
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1)
    }
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#f0c04a'
  },
  header: {
    fontSize: '1.4rem',
    fontWeight: 200,
    textAlign: 'center'
  },
  body: {
    fontSize: '0.9rem',
    fontWeight: 100
  }
}));

export default useStyles;
