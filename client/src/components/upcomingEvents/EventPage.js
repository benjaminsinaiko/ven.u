import React, { useState, useContext, useEffect } from 'react';

import useStyles from './styles/EventStyles';
import { EventsContext } from '../../contexts/eventsContext';
import EventHeader from './EventHeader';
import Details from './EventDetails';
import EventDetails from './EventDetails';

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

  console.log('event found', event);

  return (
    <div className={classes.root}>
      {event && (
        <>
          <EventHeader event={event} />
          <div className={classes.details}>
            <EventDetails />
            <EventDetails />
          </div>
        </>
      )}
    </div>
  );
}
