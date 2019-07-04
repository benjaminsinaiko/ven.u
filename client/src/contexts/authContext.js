import React, { useState, createContext, useContext, useEffect } from 'react';

import * as authClient from '../utils/authClient';
import { getCurrentUser, userHasRole } from '../api/parseApi';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(getCurrentUser() || null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    userHasRole(user, 'admin').then(isAdmin => {
      setIsAdmin(isAdmin);
    });
  }, [user]);

  const login = async (username, password) => {
    const user = await authClient.login(username, password);
    try {
      if (user instanceof Error === false) setUser(user);
      return user;
    } catch (e) {
      return e;
    }
  };

  const signUp = async (username, password) => {
    const newUser = await authClient.signUp(username, password);
    try {
      if (newUser instanceof Error === false) setUser(newUser);
      return newUser;
    } catch (e) {
      return e;
    }
  };

  const logout = async () => {
    await authClient.logout();
    setUser(null);
  };

  const fbLogin = async () => {
    const fbUser = await authClient.fbLogin();
    setUser(fbUser);
  };

  const fbLogout = () => {
    authClient.fbLogout();
  };

  return (
    <AuthContext.Provider
      value={{ isAdmin, user, login, logout, signUp, fbLogin, fbLogout }}
      {...props}
    />
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
