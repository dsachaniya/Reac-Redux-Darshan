/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 *
 * @param {Node} component
 * @param {boolean} isLoggedIn
 * @param {Object} rest
 * @returns {Node}
 */
function RouteAuthentication({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default RouteAuthentication;
