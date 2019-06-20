import { makeStyles } from '@material-ui/core/styles';
import downloadAppStore from '../../../assets/downloadAppStore.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(0deg, rgba(75,125,165,1) 30%,  rgba(180,198,218,1)100%)',
    paddingTop: 40,
    paddingBottom: 20,
    margin: 'auto'
  },
  header: {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem'
    }
  },
  grid: {
    maxWidth: 1200,
    margin: 'auto'
  },
  card: {
    maxHeight: 500,
    maxWidth: 281.25,
    margin: '20px auto'
  },
  appButton: {
    backgroundImage: `url(${downloadAppStore})`,
    width: 135,
    height: 40
  }
}));

export default useStyles;
