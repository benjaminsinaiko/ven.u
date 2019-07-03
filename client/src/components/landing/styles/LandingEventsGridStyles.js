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
  gridList: {
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: '100%'
    // Promote the list into it's own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)'
  },
  tile: {
    backgroundColor: theme.palette.background.paper
  },
  venueName: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center'
  },
  title: {
    color: 'white',
    fontSize: '1.4rem'
  },
  titleBar: {
    height: 100,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}));

export default useStyles;
