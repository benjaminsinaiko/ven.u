import React, { useState, useEffect } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles/LandingEventsGridStyles';
import { converLocalDisplay } from '../../utils/dateTime';
import { getNextEvents } from '../../api/parseApi';
import crowdImage from '../../assets/crowdImage_small.jpg';

const LandingEventsGrid = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const results = await getNextEvents();
      setEvents(results);
    }
    getEvents();
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Upcoming Shows</Typography>
      <GridList className={classes.gridList} cols={2.5} cellHeight={300}>
        {events.length ? (
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
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                actionIcon={
                  <Typography className={classes.date}>
                    {converLocalDisplay(tile.eventStartDateTime.iso)}
                  </Typography>
                }
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
