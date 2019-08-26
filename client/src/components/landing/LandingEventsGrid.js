import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/LandingEventsGridStyles';
import { EventsContext } from '../../contexts/eventsContext';
import { convertLocalDisplay } from '../../utils/dateTime';
import { getArtistImage } from '../../api/spotifyApi';

const LandingEventsGrid = () => {
  const classes = useStyles();
  const { events, loading } = useContext(EventsContext);
  const numUpcomingEvents = 15;
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const upcoming = events.slice(0, numUpcomingEvents).map(async (event) => {
          const response = await getArtistImage(event.artist.artistSlug, 'md');
          const newEvent = event;
          newEvent.artist.artistImg = response;
          return newEvent;
        });
        const eventsWithImages = await Promise.all(upcoming);
        return setUpcomingEvents(eventsWithImages);
      } catch (err) {
        return err;
      }
    }
    if (!loading) fetchImages();
  }, []);

  const theme = useTheme();
  const xsGrid = useMediaQuery(theme.breakpoints.down('xs'));
  const columns = xsGrid ? 1.5 : 2.5;

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        Upcoming Shows
      </Typography>

      <GridList className={classes.gridList} cols={columns} cellHeight={300}>
        {upcomingEvents
          && upcomingEvents.map(event => (
            <GridListTile component={Link} key={event.objectId} to={`/event/${event.objectId}`}>
              <img style={{ width: '100%' }} src={event.artist.artistImg} alt={event.title} />
              <GridListTileBar title={event.venue.venueName} titlePosition="top" />
              <GridListTileBar
                title={event.title}
                subtitle={convertLocalDisplay(event.eventStartDateTime.iso)}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                  subtitle: classes.subtitle,
                }}
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default LandingEventsGrid;
