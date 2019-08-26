import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/VenueStyles';
import ListEventCard from './ListEventCard';

export default function VenueEventsList({ events }) {
  const classes = useStyles();

  return (
    <div className={classes.eventsList}>
      <h1 className={classes.eventsHeader}>Upcoming Events</h1>
      {events && events.length ? (
        events.map(event => (
          <ListEventCard key={event.objectId} event={event} className={classes.eventCard} />
        ))
      ) : (
        <Typography className={classes.noEvents}>No Events...</Typography>
      )}
    </div>
  );
}
