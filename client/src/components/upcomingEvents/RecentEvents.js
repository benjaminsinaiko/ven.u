import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { EventsContext } from '../../contexts/eventsContext';
import { convertLocal } from '../../utils/dateTime';

export default function RecentEvents() {
  const eventsData = useContext(EventsContext);
  console.log('from recent', eventsData);

  const [recent, setRecent] = useState([]);

  const getRecent = events => {
    const pastDate = moment()
      .subtract(10, 'days')
      .startOf('day')
      .format();

    return events.filter(event => convertLocal(event.createdAt) > pastDate);
  };

  useEffect(() => {
    if (eventsData.events) {
      const recentFilter = getRecent(eventsData.events);
      setRecent(recentFilter);
    }
  }, [eventsData]);

  console.log('recent', recent);
  return (
    <div>
      <h1>New Events</h1>
    </div>
  );
}
