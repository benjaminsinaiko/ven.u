import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: 'white',
    backgroundColor: '#212121',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  logo: {
    '&:hover': {
      filter:
        'invert(54%) sepia(31%) saturate(3755%) hue-rotate(5deg) brightness(101%) contrast(87%)'
    }
  },
  social: {
    display: 'flex',
    justifyContent: 'center'
  },
  socialIcons: {
    color: 'white',
    fontSize: '1.3rem',
    margin: theme.spacing(2),
    '&:hover': {
      color: '#E48611'
    }
  },
  privacy: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: '#E48611'
    }
  }
}));

export default useStyles;
