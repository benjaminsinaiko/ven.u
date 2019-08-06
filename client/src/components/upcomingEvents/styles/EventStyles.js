import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'radial-gradient(#ffffff, #1a5479)',
    minHeight: '94vh'
  },
  header: {
    display: 'flex',
    marginTop: 10,
    width: '65%',
    height: 400,
    backgroundColor: '#fff'
  },
  cardMedia: {
    width: '100%',
    backgroundPosition: 'top',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '1.2rem',
    marginRight: '1.2rem',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0, 0.4)'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%'
  }
}));

export default useStyles;
