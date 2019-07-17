import React, { useReducer, createContext, useEffect } from 'react';

import eventsReducer from '../reducers/eventsReducer';
import { getUpcomingEvents } from '../api/parseApi';

const initialState = {
  loading: false,
  events: null,
  errors: null
};

export const EventsContext = createContext();
export const EventsDispactchContext = createContext();

export const EventsProvider = props => {
  const [eventsData, dispatch] = useReducer(eventsReducer, initialState);
  const { children } = props;

  useEffect(() => {
    async function fetchEvents() {
      dispatch({ type: 'START_LOADING' });
      try {
        const response = await getUpcomingEvents(50);
        dispatch({ type: 'LOAD_EVENTS', events: response });
      } catch (error) {
        dispatch({ type: 'LOAD_ERROR', errors: error });
      }
    }
    fetchEvents();
  }, [dispatch]);

  return (
    <EventsContext.Provider value={eventsData}>
      <EventsDispactchContext.Provider value={dispatch}>{children}</EventsDispactchContext.Provider>
    </EventsContext.Provider>
  );
};
