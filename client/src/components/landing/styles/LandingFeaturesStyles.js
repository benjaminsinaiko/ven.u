import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    textAlign: 'center'
  },
  featuresTitle: {
    fontSize: '1.4rem',
    fontWeight: 500,
    padding: theme.spacing(2)
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
    // // padding: theme.spacing()
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
