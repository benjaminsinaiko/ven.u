import React from 'react';

import useStyles from './styles/VenueStyles';
import ListEventCard from './ListEventCard';

export default function VenueEventsList({ venue }) {
  const classes = useStyles();

  return (
    <div className={classes.eventsList}>
      <h1 className={classes.eventsHeader}>Upcoming Events</h1>
      {venue.events.map(event => (
        <ListEventCard key={event.objectId} event={event} className={classes.eventCard} />
      ))}
    </div>
  );
}
