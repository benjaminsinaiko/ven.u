import React, { useState, useContext, useEffect } from 'react';

import useStyles from './styles/EventStyles';
import { EventsContext } from '../../contexts/eventsContext';
import EventHeader from './EventHeader';
import EventDetails from './EventDetails';
import EventBio from './EventBio';

export default function EventPage({ match: { params } }) {
  const classes = useStyles();
  const eventsData = useContext(EventsContext);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    function getEvent() {
      const event = eventsData.events.find(({ objectId }) => objectId === params.eventId);
      setEvent(event);
    }
    if (eventsData.events) getEvent();
  }, [eventsData, params.eventId]);

  return (
    <div className={classes.root}>
      {event && (
        <div className={classes.eventContent}>
          <EventHeader event={event} />
          <div className={classes.details}>
            <EventDetails event={event} />
          </div>
          <EventBio artist={event.artist.artistName} />
        </div>
      )}
    </div>
  );
}
