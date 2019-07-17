import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: 'radial-gradient(#fff2d9, #ffda8d)',
    minHeight: '82vh'
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
