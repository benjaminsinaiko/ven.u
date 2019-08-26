import React, { useEffect, useState, useContext } from 'react';

import useStyles from './styles/VenueStyles';
import { EventsContext } from '../../contexts/eventsContext';
import { VenuesContext } from '../../contexts/venuesContext';
import VenueHeader from './VenueHeader';
import VenueDescription from './VenueDescription';
import VenueEventsList from './VenueEventsList';

export default function VenuePage({ match: { params } }) {
  const classes = useStyles();
  const { events } = useContext(EventsContext);
  const { venues } = useContext(VenuesContext);
  const [venue, setVenue] = useState(null);
  const [venueEvents, setVenueEvents] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function getVenue() {
      const venueData = venues.find(({ objectId }) => objectId === params.venueId);
      setVenue(venueData);
    }
    getVenue();
  }, [events, venues, params.venueId]);

  useEffect(() => {
    function filterEvents() {
      const filteredEvents = events.filter(e => e.venue.objectId === venue.objectId);
      setVenueEvents(filteredEvents);
    }
    if (venue) filterEvents();
  }, [events, venue]);

  return (
    <div className={classes.root}>
      {venue ? (
        <>
          <VenueHeader venue={venue} />
          <VenueDescription venue={venue} />
          <VenueEventsList events={venueEvents} />
        </>
      ) : null}
    </div>
  );
}
