import React, { useState, createContext, useContext } from 'react';

import * as authClient from '../utils/authClient';
import { getCurrentUser, userHasRole } from '../api/parseApi';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(getCurrentUser() || null);
  const [isAdmin, setIsAdmin] = useState(false);

  if (user)
    userHasRole(user, 'admin').then(isAdmin => {
      setIsAdmin(isAdmin);
    });

  const login = async (username, password) => {
    const user = await authClient.login(username, password);
    try {
      setUser(user);
      return user;
    } catch (e) {
      return e;
    }
  };

  const register = async (username, password, email) => {
    const newUser = await authClient.register(username, password, email);
    try {
      setUser(newUser);
      return user;
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
      value={{ isAdmin, user, login, logout, register, fbLogin, fbLogout }}
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
