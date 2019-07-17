import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

// import eventsData from '../../api/sampleEventsSearch';
import { EventsContext } from '../../contexts/eventsContext';
import { addImages } from '../../api/parseApi';
import { convertLocal } from '../../utils/dateTime';
import EventCard from './EventCard';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './sytles/EventCardStyles';

export default function RecentEvents() {
  const classes = useStyles();
  const eventsData = useContext(EventsContext);
  // console.log('from recent', eventsData);

  const [recent, setRecent] = useState([]);
  console.log('recent', recent);

  const getRecent = events => {
    const pastDate = moment()
      .subtract(120, 'days')
      .startOf('day')
      .format();

    return events.filter(event => convertLocal(event.createdAt) > pastDate);
  };

  useEffect(() => {
    async function getRecentWithImgs() {
      const recentFiltered = await getRecent(eventsData.events);
      const withImages = await addImages(recentFiltered);
      setRecent(withImages);
    }
    if (eventsData.events) getRecentWithImgs();
  }, [eventsData]);

  return (
    <div className={classes.root}>
      {recent.length && recent.map(event => <EventCard key={event.objectId} event={event} />)}
    </div>
  );
}
