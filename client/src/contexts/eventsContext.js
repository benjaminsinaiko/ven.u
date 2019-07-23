import React, { useReducer, createContext, useEffect } from 'react';

import eventsReducer from '../reducers/eventsReducer';
import { getUpcomingEvents } from '../api/parseApi';

const initialState = {
  loading: false,
  events: null,
  skip: 0,
  errors: null
};

export const EventsContext = createContext();
export const EventsDispatchContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsData, dispatch] = useReducer(eventsReducer, initialState);

  useEffect(() => {
    async function fetchEvents() {
      dispatch({ type: 'START_LOADING' });
      try {
        const response = await getUpcomingEvents(25);
        dispatch({ type: 'LOAD_EVENTS', events: response });
      } catch (error) {
        dispatch({ type: 'LOAD_ERROR', errors: error });
      }
    }
    fetchEvents();
  }, [dispatch]);

  return (
    <EventsContext.Provider value={eventsData}>
      <EventsDispatchContext.Provider value={dispatch}>{children}</EventsDispatchContext.Provider>
    </EventsContext.Provider>
  );
};
