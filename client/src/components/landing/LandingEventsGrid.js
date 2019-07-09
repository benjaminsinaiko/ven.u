import React, { useState, useEffect } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/LandingEventsGridStyles';
import { converLocalDisplay } from '../../utils/dateTime';
import { getNextTenEvents } from '../../api/parseApi';
import crowdImage from '../../assets/crowdImage_small.jpg';

const LandingEventsGrid = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const results = await getNextTenEvents();
      setEvents(results);
    }
    getEvents();
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Upcoming Shows</Typography>
      <GridList className={classes.gridList} cols={2.5} cellHeight={300}>
        {events.length &&
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
                  <Typography>{converLocalDisplay(tile.eventStartDateTime.iso)}</Typography>
                }
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default LandingEventsGrid;
