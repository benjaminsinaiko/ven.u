import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
  },
  card: {
    width: '100%',
    fontFamily: 'American Typewriter, serif',
  },
  title: {
    fontSize: 14,
  },
  setName: {
    width: 'fit-content',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(246,173,105,0.6)',
  },
  songName: {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    fontWeight: 'bold',
    marginLeft: '1em',
  },
  pos: {
    marginBottom: 12,
  },
}));

export default useStyles;
