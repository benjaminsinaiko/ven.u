import React, {
  useState, useEffect, useContext, memo,
} from 'react';
import moment from 'moment';

import useStyles from './styles/CardStyles';
import { EventsContext } from '../../contexts/eventsContext';
import { convertLocal } from '../../utils/dateTime';
import EventCard from './ListEventCard';

function ListRecentEvents() {
  const classes = useStyles();
  const eventsData = useContext(EventsContext);
  const [recent, setRecent] = useState([]);

  function getRecent(events) {
    const pastDate = moment()
      .subtract(30, 'days')
      .startOf('day')
      .format();
    return events.filter(event => convertLocal(event.createdAt) > pastDate).slice(0, 20);
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
      {recent && recent.map(event => <EventCard key={event.objectId} event={event} />)}
    </div>
  );
}

export default memo(ListRecentEvents);
