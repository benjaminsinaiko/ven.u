import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: 'radial-gradient(#ffffff, #b4c6da)',
    height: '94vh',
    overflow: 'scroll'
  },
  links: {
    textDecoration: 'none'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default useStyles;
