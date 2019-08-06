import React, { useState, useContext, memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { EventsContext } from '../../contexts/eventsContext';
import { EventsDispatchContext } from '../../contexts/eventsContext';
import { getUpcomingEvents } from '../../api/parseApi';
import EventCard from './ListEventCard';
import useStyles from './styles/CardStyles';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { Typography } from '@material-ui/core';

function ListAllEvents() {
  const classes = useStyles();
  const { events, skip } = useContext(EventsContext);
  const dispatch = useContext(EventsDispatchContext);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreEvents);
  const [moreToFetch, setMoreToFetch] = useState(true);

  function fetchMoreEvents() {
    setTimeout(async () => {
      if (moreToFetch) {
        const fetchMore = await getUpcomingEvents(25, skip);
        setIsFetching(false);
        if (fetchMore.length) {
          dispatch({ type: 'LOAD_MORE_EVENTS', moreEvents: fetchMore });
        } else {
          setMoreToFetch(false);
        }
        return;
      }
    }, 1000);
  }

  return (
    <div className={classes.rootCard}>
      {events && events.map(event => <EventCard key={event.objectId} event={event} />)}
      {isFetching && moreToFetch && (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )}
      {!moreToFetch && <Typography className={classes.allEventsShown}>All Showing</Typography>}
    </div>
  );
}

export default memo(ListAllEvents);
