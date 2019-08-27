import React, { createContext, useContext } from 'react';
import { useAuth } from './authContext';
import useFetch from '../hooks/useFetch';

const UserContext = createContext();

function UserProvider(props) {
  const { isAdmin, user } = useAuth();
  const [history, hloading] = useFetch(`/parse/users/history/${user.id}/`);
  const [attending, aloading] = useFetch(`/parse/users/attending/${user.id}/`);

  if (!hloading) user.history = history;
  if (!aloading) user.attending = attending;

  return <UserContext.Provider value={{ isAdmin, user }} {...props} />;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
