import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 450,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#ffda8d'
  },
  header: {
    fontSize: '2rem',
    marginBottom: '35px'
  },
  loading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridList: {
    flexWrap: 'nowrap',
    alignItems: 'center',
    '& li': {
      width: '40%'
    }
  },
  tile: {
    backgroundColor: theme.palette.background.paper
  },
  venueName: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center'
  },
  titleBar: {
    height: 100,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  title: {
    color: 'white',
    fontSize: '1.4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem'
    }
  },
  subtitle: {
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem'
    }
  }
  // date: {
  //   color: 'white',
  //   marginRight: theme.spacing(1),
  //   [theme.breakpoints.down('xs')]: {
  //     fontSize: '0.5rem'
  //   }
  // }
}));

export default useStyles;
