import React, { useState, useContext } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Typography } from '@material-ui/core';
import { EventsContext } from '../../contexts/eventsContext';

import useStyles from './styles/CardStyles';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import EventCard from './ListEventCard';

function ListAllEvents() {
  const classes = useStyles();
  const { events } = useContext(EventsContext);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreEvents);
  const [moreToShow, setMoreToShow] = useState(true);
  const [displayEvents, setDisplayEvents] = useState(events.slice(0, 20));

  function fetchMoreEvents() {
    setTimeout(async () => {
      const displayLength = displayEvents.length;
      if (displayLength < events.length) {
        const newShowEvents = events.slice(displayLength, displayLength + 5);
        setDisplayEvents([...displayEvents, ...newShowEvents]);
        setIsFetching(false);
      } else {
        setMoreToShow(false);
        setIsFetching(false);
      }
    }, 1500);
  }

  return (
    <div className={classes.rootCard}>
      {displayEvents
        && displayEvents.map(event => <EventCard key={event.objectId} event={event} />)}
      {isFetching && <Skeleton className={classes.skeleton} variant="rect" />}
      {!moreToShow && (
        <Typography className={classes.allEventsShown}>All Events Showing</Typography>
      )}
    </div>
  );
}

export default ListAllEvents;
