import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary
  },
  card: {
    width: '100%',
    fontFamily: 'American Typewriter, serif'
  },
  venueName: {
    fontSize: '1em'
  },
  tour: {
    fontSize: '.8em'
  },
  artistName: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  eventInfo: {
    textAlign: 'center',
    fontSize: '0.5em'
  },
  setName: {
    width: 'fit-content',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(246,173,105,0.6)',
    paddingLeft: 5
  },
  songContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  songName: {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    fontWeight: 'bold',
    marginLeft: '1em'
  },
  songExtrasRow: {
    display: 'flex',
    flexWrap: 'wrap',
    fontStyle: 'italic',
    paddingLeft: 42
  },
  songExtraInfo: {
    fontSize: '.6em',
    paddingRight: theme.spacing(2)
  }
}));

export default useStyles;
