import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headerRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
    backgroundImage: 'linear-gradient(to bottom, #8b9497, #a2aaac, #b9c0c2, #d1d7d8, #e9eeef)',
  },
  avatar: {
    width: 100,
    height: 100,
    color: 'white',
    backgroundColor: 'rgba(0,71,107, .6)',
    fontSize: '2.5em',
    margin: theme.spacing(2),
  },
}));

export default useStyles;
