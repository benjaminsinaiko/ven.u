import { makeStyles } from '@material-ui/core/styles';

const SM_SIZE = 160;
const XS_SIZE = 135;

const useStyles = makeStyles(theme => ({
  rootCard: {
    backgroundColor: 'inherit',
    width: '60%',
    maxWidth: 725,
    [theme.breakpoints.down('lg')]: {
      width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '77vh'
  },
  card: {
    display: 'flex',
    height: SM_SIZE,
    margin: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      height: XS_SIZE
    }
  },
  image: {
    objectFit: 'cover',
    width: SM_SIZE,
    height: SM_SIZE,
    [theme.breakpoints.down('xs')]: {
      width: XS_SIZE,
      height: XS_SIZE
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      '& h5': {
        fontSize: 18
      }
    }
  },
  content: {
    flex: '1 0 auto'
  },
  dateTime: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  calAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default useStyles;
