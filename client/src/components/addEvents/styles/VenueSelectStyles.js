import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '40%'
  },
  select: {
    minWidth: '200px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default useStyles;
