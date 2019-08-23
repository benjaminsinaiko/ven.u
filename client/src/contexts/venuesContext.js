import React, { createContext, useEffect } from 'react';

import venuesReducer from '../reducers/venuesReducer';
import useSessionStorageReducer from '../hooks/useSessionStorageReducer';
import { getVenues, getFutureVenueEvents } from '../api/parseApi';

const initialState = {
  loading: true,
  venues: null,
  venuesEvents: null,
  errors: null,
};

export const VenuesContext = createContext();
export const VenuesDispatchContext = createContext();

export const VenuesProvider = ({ children }) => {
  const [venuesData, dispatch] = useSessionStorageReducer('venues', initialState, venuesReducer);

  useEffect(() => {
    async function fetchVenues() {
      dispatch({ type: 'START_LOADING' });
      try {
        const response = await getVenues();
        dispatch({ type: 'LOAD_VENUES', venues: response });
      } catch (error) {
        dispatch({ type: 'LOAD_ERRORS', errors: error });
      }
    }
    const cachedVenues = JSON.parse(window.sessionStorage.getItem('venues'));
    if (cachedVenues.venues === null) {
      fetchVenues();
    } else {
      dispatch({ type: 'LOAD_VENUES', venues: cachedVenues.venues });
    }
  }, [dispatch]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventsData = venuesData.venues.map(async (venue) => {
          const response = await getFutureVenueEvents(venue.objectId);
          return { ...venue, events: response };
        });
        const withEvents = await Promise.all(eventsData);
        dispatch({ type: 'LOAD_VENUES_EVENTS', venuesEvents: withEvents });
      } catch (error) {
        dispatch({ type: 'LOAD_ERRORS', errors: error });
      }
    }
    const cachedVenues = JSON.parse(window.sessionStorage.getItem('venues'));
    if (cachedVenues.venuesEvents === null) {
      fetchEvents();
    } else {
      dispatch({ type: 'LOAD_VENUES_EVENTS', venuesEvents: cachedVenues.venuesEvents });
    }
  }, [venuesData.venues, dispatch]);

  return (
    <VenuesContext.Provider value={venuesData}>
      <VenuesDispatchContext.Provider value={dispatch}>{children}</VenuesDispatchContext.Provider>
    </VenuesContext.Provider>
  );
};
