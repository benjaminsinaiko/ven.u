import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '550px',
    backgroundColor: '#f0c04a',
    [theme.breakpoints.down('sm')]: {
      height: '1100px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '1000px'
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '75%',
    width: '90%',
    maxWidth: '1000px',
    [theme.breakpoints.down('sm')]: {
      height: '90%',
      width: '90%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      width: '100%'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 0
    },
    '& span': {
      fontSize: '1.7em',
      fontWeight: '400',
      padding: 0,
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.3em',
        marginLeft: theme.spacing(0.5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '2em'
      }
    }
  },
  iconsGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'flex-start',
    margin: theme.spacing(2),
    '& img': {
      height: '150px',
      width: 'auto'
    },
    '& h4': {
      fontSize: '1.2em',
      margin: 0
    },
    '& p': {
      fontSize: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      '& h4': {
        fontSize: '1.5em'
      },
      '& p': {
        fontSize: '1.2em'
      }
    }
  }
}));

export default useStyles;
