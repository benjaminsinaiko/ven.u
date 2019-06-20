import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '550px',
    backgroundColor: '#f0c04a',
    [theme.breakpoints.down('sm')]: {
      fontSize: '75%'
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '75%',
    width: '90%',
    maxWidth: '1000px',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      width: '100%'
    }
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: 300,
    textAlign: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      fontWeight: 400,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 0
    }
  },
  iconsGroup: {
    padding: theme.spacing(4)
  },
  icons: {
    alignItems: 'center',
    textAlign: 'center'
  }
}));

export default useStyles;
