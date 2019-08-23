import React, { createContext, useEffect } from 'react';

import venuesReducer from '../reducers/venuesReducer';
import useSessionStorageReducer from '../hooks/useSessionStorageReducer';
import { getVenues } from '../api/parseApi';

const initialState = {
  loading: true,
  venues: null,
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
      console.log('Fetching Venues from Parse');
    } else {
      dispatch({ type: 'LOAD_VENUES', venues: cachedVenues.venues });
      console.log('Fetching Venues from sessionStorage');
    }
  }, [dispatch]);

  return (
    <VenuesContext.Provider value={venuesData}>
      <VenuesDispatchContext.Provider value={dispatch}>{children}</VenuesDispatchContext.Provider>
    </VenuesContext.Provider>
  );
};
