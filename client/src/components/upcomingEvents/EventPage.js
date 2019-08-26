import React, { useState, useContext, useEffect } from 'react';

import useStyles from './styles/EventStyles';
import { EventsContext } from '../../contexts/eventsContext';
import { searchEvent } from '../../api/parseApi';
import EventHeader from './EventHeader';
import EventDetails from './EventDetails';
import EventBio from './EventBio';
import EventSongs from './EventSongs';

export default function EventPage({ match: { params } }) {
  const classes = useStyles();
  const { events } = useContext(EventsContext);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getEvent() {
      const eventData = events.find(({ objectId }) => objectId === params.eventId);
      if (eventData) {
        setEvent(eventData);
      } else {
        const newEventData = await searchEvent(params.eventId);
        setEvent(...newEventData);
      }
    }
    if (events) getEvent();
  }, [events, params.eventId]);

  return (
    <div className={classes.root}>
      {event && (
        <>
          <EventHeader event={event} />
          <div className={classes.details}>
            <EventDetails event={event} />
          </div>
          <div className={classes.artistInfo}>
            <EventSongs artist={event.artist.artistName} />
            <EventBio artist={event.artist.artistName} />
          </div>
        </>
      )}
    </div>
  );
}
