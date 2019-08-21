import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#d4dce0',
    minHeight: '83vh'
  },
  header: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    textAlign: 'center'
  },
  artistName: {
    fontSize: '2em',
    fontFamily: 'Comic Sans MS, Comic Sans, cursive'
  },
  setlists: {
    margin: 'auto',
    maxWidth: 700
  },
  noSetlists: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 700,
    height: 250,
    padding: theme.spacing(3)
  },
  attribution: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3),
    '& img': {
      zoom: '50%',
      padding: theme.spacing(1)
    }
  }
}));

export default useStyles;
