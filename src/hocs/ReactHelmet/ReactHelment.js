import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * ReactHelmet: Dynamically loads page title and description
 * @param {Node} WrappedComponent
 * @param {string} title
 * @param {string} description
 * @returns {Function}
 */
function ReactHelmet(WrappedComponent, title, description) {
  return function ReactHelmetComponent(props) {
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...props} />
      </>
    );
  };
}

export default ReactHelmet;
