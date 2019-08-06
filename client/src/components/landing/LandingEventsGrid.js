import React, { useReducer, useEffect } from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles/LandingEventsGridStyles';
import { convertLocalDisplay } from '../../utils/dateTime';
import { getUpcomingEvents, addImages } from '../../api/parseApi';
import crowdImage from '../../assets/crowdImage_small.jpg';

const LandingEventsGrid = () => {
  const classes = useStyles();
  const [{ loading, events }, setEventsData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      loading: true,
      events: []
    }
  );

  const theme = useTheme();
  const xsGrid = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    async function getEvents() {
      setEventsData({ loading: true });
      const results = await getUpcomingEvents(10);
      setEventsData({ events: results });
      const withImages = await addImages(results);
      setEventsData({ events: withImages });
      setEventsData({ loading: false });
    }
    getEvents();
  }, []);

  console.log('loading ', loading);
  console.log('events ', events);

  const columns = xsGrid ? 1.5 : 2.5;

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Upcoming Shows</Typography>
      <GridList className={classes.gridList} cols={columns} cellHeight={300}>
        {!loading ? (
          events.map(tile => (
            <GridListTile key={tile.objectId} className={classes.tile}>
              {tile.images ? (
                <img src={tile.images[1].url} alt={tile.title} />
              ) : (
                <img src={crowdImage} alt={tile.title} />
              )}
              <GridListTileBar title={tile.venue.venueName} titlePosition="top" />
              <GridListTileBar
                title={tile.title}
                subtitle={convertLocalDisplay(tile.eventStartDateTime.iso)}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                  subtitle: classes.subtitle
                }}
              />
            </GridListTile>
          ))
        ) : (
          <span className={classes.loading} style={{ width: '100%' }}>
            <CircularProgress style={{ color: '#1e1e1e' }} />
          </span>
        )}
      </GridList>
    </div>
  );
};

export default LandingEventsGrid;
