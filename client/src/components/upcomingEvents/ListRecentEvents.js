import React, { useState, useEffect, useContext } from 'react';

import useStyles from './styles/CardStyles';
import { EventsContext } from '../../contexts/eventsContext';
import { getRecent } from '../../utils/dateTime';
import EventCard from './ListEventCard';

function ListRecentEvents() {
  const classes = useStyles();
  const eventsData = useContext(EventsContext);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    async function getRecentEvents() {
      const recentFiltered = await getRecent(eventsData.events);
      if (recentFiltered.length) {
        setRecent(recentFiltered);
      } else {
        const last10Events = eventsData.events
          .sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
          .slice(0, 6);
        setRecent(last10Events);
      }
    }
    if (eventsData.events) getRecentEvents();
  }, [eventsData]);

  console.log(recent);

  return (
    <div className={classes.rootCard}>
      {recent && recent.map(event => <EventCard key={event.objectId} event={event} />)}
    </div>
  );
}

export default ListRecentEvents;
