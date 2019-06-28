import React, { useState, useEffect } from 'react';

import ViewEventsForm from './ViewEventsForm';
import { getFutureVenueEvents } from '../../../api/parseApi';

import sampleEvents from '../../../api/sampleEventsSearch';

const ViewEventsList = ({ selectedVenue, setEventCount }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const fetchedEvents = await getFutureVenueEvents(selectedVenue.objectId);
      await setEvents(fetchedEvents);
    }
    if (selectedVenue) fetchEvents(selectedVenue.objectId);
  }, [selectedVenue]);

  useEffect(() => {
    setEventCount(events.length);
  }, [events.length, setEventCount]);

  return (
    <>
      {sampleEvents.map(event => (
        <ViewEventsForm key={event.objectId} event={event} />
      ))}
    </>
  );
};

export default ViewEventsList;
