import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-center'
  },
  navbar: {
    backgroundColor: '#212121'
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
