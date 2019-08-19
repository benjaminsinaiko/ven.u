import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'radial-gradient(#ffffff, #1a5479)',
    minHeight: '94vh',
  },
  header: {
    display: 'flex',
    marginTop: 10,
    height: 400,
    width: '50%',
  },
  cardMedia: {
    width: '100%',
    backgroundPosition: 'top',
    alignItems: 'flex-end',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '1.2rem',
    paddingRight: '1.2rem',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '65%',
    margin: '10px auto',
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
  },
  bioPanel: {
    width: '60%',
    maxHeight: 496,
    overflow: 'scroll',
  },
  bioHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
  },
  player: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
