import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  }
}));

export default useStyles;
