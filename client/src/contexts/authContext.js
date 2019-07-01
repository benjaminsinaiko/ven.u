import React, { useState, createContext, useContext } from 'react';
import * as authClient from '../utils/authClient';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const login = () => {
    // login
  };

  const register = () => {
    // register
  };

  const logout = () => {
    // logout
  };

  const fbLogin = async () => {
    const fbUser = await authClient.fbLogin();
    setUser(fbUser);
  };

  const fbLogout = () => {
    authClient.fbLogout();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, fbLogin, fbLogout }} {...props} />
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
