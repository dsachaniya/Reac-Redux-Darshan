import { createSelector } from 'reselect';

const userListSelector = (state) => state.userList;

/**
 * userListSelector
 * @returns {Function}
 */
const getUserListSelector = createSelector(userListSelector, (value) => value);

export default getUserListSelector;
