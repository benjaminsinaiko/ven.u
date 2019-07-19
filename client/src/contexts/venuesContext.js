import React, { createContext, useEffect } from 'react';

import venuesReducer from '../reducers/venuesReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import { getVenues, getFutureVenueEvents } from '../api/parseApi';

const initialState = {
  loading: true,
  venues: null,
  venuesEvents: null,
  errors: null
};

export const VenuesContext = createContext();
export const VenuesDispatchContext = createContext();

export const VenuesProvider = ({ children }) => {
  const [venuesData, dispatch] = useLocalStorageReducer('venues', initialState, venuesReducer);

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
    const cachedVenues = JSON.parse(window.localStorage.getItem('venues'));
    if (cachedVenues.venues === null) {
      fetchVenues();
    } else {
      dispatch({ type: 'LOAD_VENUES', venues: cachedVenues.venues });
    }
  }, [dispatch]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventsData = venuesData.venues.map(async venue => {
          const response = await getFutureVenueEvents(venue.objectId);
          return { ...venue, events: response };
        });
        const withEvents = await Promise.all(eventsData);
        dispatch({ type: 'LOAD_VENUES_EVENTS', venuesEvents: withEvents });
      } catch (error) {
        dispatch({ type: 'LOAD_ERRORS', errors: error });
      }
    }
    if (venuesData.venues) fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VenuesContext.Provider value={venuesData}>
      <VenuesDispatchContext.Provider value={dispatch}>{children}</VenuesDispatchContext.Provider>
    </VenuesContext.Provider>
  );
};
