import { createSelector } from 'reselect';

const userLoginSelector = (state) => state.userLogin;

/**
 * getUserLoginSelector
 * @returns {Function}
 */
const getUserLoginSelector = createSelector(
  userLoginSelector,
  (value) => value,
);

export default getUserLoginSelector;
