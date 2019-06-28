import React, { useState, useEffect } from 'react';

import ViewEventsForm from './ViewEventsForm';
import { getFutureVenueEvents } from '../../../api/parseApi';

const ViewEventsList = ({ selectedVenue, setEventCount }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const fetchedEvents = await getFutureVenueEvents(selectedVenue.objectId);
      await setEvents(fetchedEvents);

      setEventCount(events.length);
    }
    if (selectedVenue) fetchEvents(selectedVenue.objectId);
  }, [events.length, selectedVenue, setEventCount]);

  return (
    <>
      {events.map(event => (
        <ViewEventsForm key={event.objectId} event={event} />
      ))}
    </>
  );
};

export default ViewEventsList;
