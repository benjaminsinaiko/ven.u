import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'radial-gradient(#ffffff, #1a5479)',
    minHeight: '94vh'
  },
  eventContent: {
    width: '65%'
  },
  header: {
    display: 'flex',
    marginTop: 10,
    height: 400,
    backgroundColor: '#fff'
  },
  cardMedia: {
    width: '100%',
    backgroundPosition: 'top',
    alignItems: 'flex-end'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '1.2rem',
    paddingRight: '1.2rem',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0, 0.4)'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '85%',
    margin: '10px auto'
  },
  detailCard: {
    width: '30%',
    height: 150,
    textAlign: 'center'
  },
  icons: {
    margin: 10,
    fontSize: '2rem',
    color: '#eb9335'
  },
  bioPanel: {
    width: '100%',
    marginBottom: '10px'
  },
  bioHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium
  }
}));

export default useStyles;
