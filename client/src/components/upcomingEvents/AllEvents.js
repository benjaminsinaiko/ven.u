import React, { useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { EventsContext } from '../../contexts/eventsContext';
import EventCard from './EventCard';
import useStyles from './sytles/EventCardStyles';

export default function AllEvents() {
  const classes = useStyles({ background: 'radial-gradient(#ffffff, #b4c6da)' });
  const { events, errors } = useContext(EventsContext);

  if (errors) console.error('errors', errors);

  return (
    <div className={classes.rootCard}>
      {!events ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        events.map(event => <EventCard key={event.objectId} event={event} />)
      )}
    </div>
  );
}
