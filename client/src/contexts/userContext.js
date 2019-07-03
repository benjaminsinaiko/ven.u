import React, { createContext, useContext } from 'react';
import { useAuth } from './authContext';

const UserContext = createContext();

function UserProvider(props) {
  const { isAdmin, user } = useAuth();
  return <UserContext.Provider value={{ isAdmin, user }} {...props} />;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };
