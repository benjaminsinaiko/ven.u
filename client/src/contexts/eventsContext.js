import React, { createContext, useEffect } from 'react';

import toSlug from '../utils/toSlug';
import eventsReducer from '../reducers/eventsReducer';
import useSessionStorageReducer from '../hooks/useSessionStorageReducer';
import { getAllEvents } from '../api/parseApi';

const initialState = {
  loading: false,
  events: null,
  errors: null,
};

export const EventsContext = createContext();
export const EventsDispatchContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsData, dispatch] = useSessionStorageReducer('events', initialState, eventsReducer);

  useEffect(() => {
    async function fetchEvents() {
      dispatch({ type: 'START_LOADING' });
      try {
        const response = await getAllEvents();
        const withSlug = await response.map((event) => {
          const newEvent = event;
          newEvent.artist.artistSlug = toSlug(newEvent.artist.artistName);
          return newEvent;
        });
        dispatch({ type: 'LOAD_EVENTS', events: withSlug });
      } catch (error) {
        dispatch({ type: 'LOAD_ERROR', errors: error });
      }
    }
    const cachedEvents = JSON.parse(window.sessionStorage.getItem('events'));
    if (cachedEvents.events === null) {
      console.log('from fetch');
      fetchEvents();
    } else {
      console.log('from sessionStorage');
      dispatch({ type: 'LOAD_EVENTS', events: cachedEvents.events });
    }
  }, [dispatch]);

  return (
    <EventsContext.Provider value={eventsData}>
      <EventsDispatchContext.Provider value={dispatch}>{children}</EventsDispatchContext.Provider>
    </EventsContext.Provider>
  );
};
