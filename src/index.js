import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from 'tools/serviceWorker';
import Main from './Main';

render(<Main />, document.getElementById('root'));

// Registering service worker
serviceWorker.register();
