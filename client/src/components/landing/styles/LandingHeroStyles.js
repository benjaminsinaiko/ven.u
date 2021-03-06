import { makeStyles } from '@material-ui/core/styles';

import bg from '../../../assets/heroBackground.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    marginTop: -64,
    backgroundColor: '#5284ad',
    backgroundImage: `url(${bg})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
    /* background by SVGBackgrounds.com */
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    maxWidth: '1000px'
  },
  heroLogo: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    '& img': {
      height: '9em',
      width: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      '& img': {
        height: '13em',
        width: 'auto'
      }
    }
  },
  heroText: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    fontSize: '2.5rem',
    fontWeight: 700,
    '& p': {
      margin: 0
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      fontSize: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem'
    }
  },
  textPhrase: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  herobutton: {
    color: 'white',
    backgroundColor: 'rgba(219,127,15,0.9)',
    width: '40%',
    padding: theme.spacing(2),
    margin: theme.spacing(6),
    fontSize: '1.1em',
    '&:hover': {
      color: '#db7f0f',
      backgroundColor: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%',
      fontSize: '1rem',
      padding: theme.spacing(1),
      marginTop: theme.spacing(8)
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      fontSize: '1rem'
    }
  }
}));

export default useStyles;
