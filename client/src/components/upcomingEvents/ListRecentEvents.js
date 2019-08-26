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
    async function getRecentWithImgs() {
      const recentFiltered = await getRecent(eventsData.events);
      setRecent(recentFiltered);
    }
    if (eventsData.events) getRecentWithImgs();
  }, [eventsData]);

  return (
    <div className={classes.rootCard}>
      {recent && recent.map(event => <EventCard key={event.objectId} event={event} />)}
    </div>
  );
}

export default ListRecentEvents;
