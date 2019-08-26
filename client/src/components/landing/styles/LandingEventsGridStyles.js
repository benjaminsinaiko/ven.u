import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 450,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#ffda8d',
  },
  header: {
    alignSelf: 'center',
    fontSize: '2rem',
    marginBottom: '35px',
  },
  gridList: {
    flexWrap: 'nowrap',
    alignItems: 'center',
    '& img': {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      '& img': {
        minWidth: 'min-content',
        minHeight: 'min-content',
      },
    },
  },
  venueName: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  titleBar: {
    height: 100,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  title: {
    color: 'white',
    fontSize: '1.4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  subtitle: {
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  loading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
