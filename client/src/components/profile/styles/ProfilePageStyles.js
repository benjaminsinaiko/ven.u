import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headerRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
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
  userName: {
    fontSize: '1.5em',
  },
  statBoxContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 230,
    '& div:nth-child(2)': {
      backgroundColor: '#f0c04a',
    },
  },
  statBox: {
    width: '30%',
    marginTop: -25,
    backgroundColor: '#4b7da5',
  },
  statInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: '#fff',
    '& h3': {
      fontSize: '2.5em',
    },
    '& p': {
      fontSize: '1.2em',
    },
  },
  statRowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  statRow: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    '& h4': {
      textAlign: 'center',
      fontSize: '1.4em',

      color: '#00476b',
    },
    '& p': {
      fontStyle: 'italic',
      color: '#1e1e1e',
    },
  },
}));

export default useStyles;
