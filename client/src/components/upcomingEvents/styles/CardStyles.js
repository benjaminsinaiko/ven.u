import { makeStyles } from '@material-ui/core/styles';

const SM_SIZE = 160;
const XS_SIZE = 100;

const useStyles = makeStyles(theme => ({
  rootCard: {
    backgroundColor: 'inherit',
    width: '60%',
    maxWidth: 725,
    [theme.breakpoints.down('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '77vh',
  },
  eventCard: {
    display: 'flex',
    height: SM_SIZE,
    margin: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      height: XS_SIZE,
      margin: theme.spacing(1),
    },
    '&:hover': {
      boxShadow: '0 10px 6px -6px #777',
    },
  },
  eventImage: {
    objectFit: 'cover',
    width: SM_SIZE,
    height: SM_SIZE,
    [theme.breakpoints.down('xs')]: {
      width: XS_SIZE,
      height: XS_SIZE,
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      '& h5': {
        fontSize: 14,
      },
      '& h6': {
        fontSize: 10,
      },
    },
  },
  content: {
    flex: '1 0 auto',
    textDecortion: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 2),
      maxHeight: 55,
    },
  },
  dateTime: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  calAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allEventsShown: {
    textAlign: 'center',
    fontSize: '1.4rem',
    fontStyle: 'italic',
    color: '#f6ad69',
    fontWeight: '500',
  },
  venueCard: {
    margin: `${theme.spacing(2)}px auto`,
    width: 300,
    height: 340,
    '& div': {
      backgroundSize: 'auto',
    },
    '&:hover div': {
      backgroundSize: 'cover',
    },
  },
  actionArea: {
    height: '100%',
  },
  venueImage: {
    height: 140,
  },
  venueInfo: {
    height: 128,
  },
  upcomingEvents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: '#c9700a',
    fontSize: 20,
  },
}));

export default useStyles;
