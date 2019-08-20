import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '94vh',
  },
  header: {
    display: 'flex',
    marginTop: 10,
    height: 400,
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 0,
    },
  },
  cardMedia: {
    width: '100%',
    position: 'relative',
    backgroundPosition: 'top',
    alignItems: 'flex-end',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '1.2rem',
    paddingRight: '1.2rem',
    color: '#fff',
    background: 'linear-gradient(0deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.80) 100%)',
  },
  setlistsButton: {
    position: 'absolute',
    color: '#fff',
    right: 10,
    bottom: 10,
    '& button': {
      color: '#fff',
      backgroundColor: 'rgba(246,173,105,0.5)',
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '65%',
    margin: '10px auto',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
    },
  },
  detailCard: {
    width: '30%',
    height: 150,
    textAlign: 'center',
  },
  icons: {
    margin: 10,
    fontSize: '2rem',
    color: '#eb9335',
  },
  artistInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: '10px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      width: '95%',
      alignItems: 'center',
      margin: theme.spacing(2),
    },
  },
  bioPanel: {
    width: '60%',
    padding: theme.spacing(3),
    maxHeight: 496,
    overflow: 'scroll',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      padding: theme.spacing(2),
    },
  },
  bioSource: {
    fontSize: '0.8em',
  },
  player: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
  },
  songList: {
    maxHeight: 400,
    overflow: 'scroll',
  },
  selectedSong: {
    backgroundColor: '#d9e2ec',
  },
  albumContainer: {
    position: 'relative',
    width: 64,
    height: 64,
    '&:hover overlay': {
      opacity: 1,
    },
  },
  playOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    opacity: '0.8',
    transition: '0.3s ease',
    backgroundColor: 'transparent',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#ffe6b3',
    },
  },
  playIcon: {
    color: '#fff',
  },
  songText: {
    marginLeft: 10,
  },
}));

export default useStyles;
