import { useReducer, useEffect } from 'react';

function useSessionStorageReducer(key, initialState, reducer) {
  // make piece of state, based off of value in localSTorage (or default)
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (e) {
      return initialState;
    }
  });
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useSessionStorageReducer;
