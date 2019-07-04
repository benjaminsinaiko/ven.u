import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from '../contexts/userContext';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const currentUser = useUser();
  return (
    <Route
      {...rest}
      render={props => (currentUser.isAdmin ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
