import React, { useState, createContext, useContext } from 'react';
import Parse from 'parse';

import * as authClient from '../utils/authClient';
import { getCurrentUser } from '../api/parseApi';
Parse.initialize(process.env.REACT_APP_APP_ID, process.env.REACT_APP_JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(getCurrentUser() || null);

  const login = async (username, password) => {
    const user = await authClient.login(username, password);
    if (user) console.log('User logged in: ', user);
    setUser(user);
  };

  const register = async (username, password, email) => {
    const newUser = await authClient.register(username, password, email);
    setUser(newUser);
  };

  const logout = async () => {
    await authClient.logout();
    console.log('Logged out');
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
