import React from 'react';
import Proptypes from 'prop-types';

/**
 * RouteNotFound
 * @returns {Node}
 */
function RouteNotFound() {
  return (
    <section>
      <h1>Oops...! 404 Route Not Found</h1>
    </section>
  );
}

RouteNotFound.prototype = {
  history: Proptypes.object.isRequired,
  location: Proptypes.object.isRequired,
  match: Proptypes.object.isRequired,
  staticContext: Proptypes.any,
};

RouteNotFound.defaultProps = {
  staticContext: null,
};

export default RouteNotFound;
