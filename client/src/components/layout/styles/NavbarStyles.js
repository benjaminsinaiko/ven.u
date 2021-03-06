import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-center',
    flexGrow: 1
  },
  navbar: {
    backgroundColor: '#4b7da5',
    opacity: 0.8
    // transition: theme.
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    flexGrow: 1,
    height: '24px',
    '& img': {
      color: 'red'
    }
  }
}));

export default useStyles;
