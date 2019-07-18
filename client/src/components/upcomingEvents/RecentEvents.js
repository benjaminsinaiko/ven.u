import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

import { EventsContext } from '../../contexts/eventsContext';
import { convertLocal } from '../../utils/dateTime';
import EventCard from './EventCard';
import useStyles from './sytles/CardStyles';

export default function RecentEvents() {
  const classes = useStyles();
  const eventsData = useContext(EventsContext);
  const [recent, setRecent] = useState([]);

  function getRecent(events) {
    const pastDate = moment()
      .subtract(120, 'days')
      .startOf('day')
      .format();
    return events.filter(event => convertLocal(event.createdAt) > pastDate);
  }

  useEffect(() => {
    async function getRecentWithImgs() {
      const recentFiltered = await getRecent(eventsData.events);
      setRecent(recentFiltered);
    }
    if (eventsData.events) getRecentWithImgs();
  }, [eventsData]);

  return (
    <div className={classes.rootCard}>
      {!recent ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        recent.map(event => <EventCard key={event.objectId} event={event} />)
      )}
    </div>
  );
}
