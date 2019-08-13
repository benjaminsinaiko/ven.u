import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'radial-gradient(#ffffff, #ffe3cc)',
    minHeight: '94vh'
  },
  headerPaper: {
    width: '80%',
    height: 300,
    display: 'flex',
    marginTop: 10
  },
  headerImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10
  },
  detailsHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  },
  venueName: {
    fontSize: '1.8rem'
  },
  venueAddress: {
    fontSize: '0.8rem'
  },
  detailsBody: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '& svg': {
      width: '1.1em',
      height: '1.1em',
      color: '#db7f0f',
      marginRight: '0.5rem'
    },
    '& p': {
      display: 'flex',
      alignItems: 'center',
      margin: '0.5rem'
    },
    '& a': {
      color: 'inherit'
      // textDecoration: 'none'
    }
  },
  venueDescription: {
    width: '60%',
    margin: 10,
    padding: 10,
    fontStyle: 'italic'
  },
  eventsList: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%'
  },
  eventsHeader: {
    textAlign: 'center'
  },
  eventCard: {
    width: '100%'
  }
}));

export default useStyles;
