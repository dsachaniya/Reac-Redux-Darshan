import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userLogin from './userLogin/reducer';
import userList from './userList/reducer';

/**
 * Root Reducer
 * where you combine all reducer as single object called redux state
 */
const rootReducer = combineReducers({
  userLogin,
  userList,
});

/**
 * composeEnhancers
 * enhancer for redux dev tools (only in development mode)
 */
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
