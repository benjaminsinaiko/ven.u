import { useState, useEffect } from 'react';

function useLocalStorageState(key, initialState) {
  // make piece of state, based off of value in localSTorage (or default)
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (e) {
      return initialState;
    }
  });

  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
