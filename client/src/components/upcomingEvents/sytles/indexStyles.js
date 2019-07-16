import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh'
  },
  tabs: {
    flexGrow: 1
  },
  links: {
    textDecoration: 'none'
  }
}));

export default useStyles;
