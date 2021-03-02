import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import Routes from 'routes';
import configureStore from './redux';

/**
 * Main
 * @returns {Function}
 */
function Main() {
  const store = configureStore();
  return (
    <StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <Routes />
        </HelmetProvider>
      </Provider>
    </StrictMode>
  );
}

export default Main;
