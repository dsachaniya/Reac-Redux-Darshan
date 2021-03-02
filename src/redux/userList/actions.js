import types from './type';

/**
 * addUserAction
 * @param {string} value
 * @returns {Object}
 */
const addUserAction = (value) => {
  console.log('value', value);
  return {
    type: types.ADD_USER,
    value,
  };
};

/**
 * activeUserAction
 * @param {string} value
 * @returns {Object}
 */
const activeUserAction = (value) => {
  return {
    type: types.ACTIVE_USER,
    value,
  };
};

/**
 * deleteUserAction
 * @param {string} value
 * @returns {Object}
 */
const deleteUserAction = (value) => ({
  type: types.DELETE_USER,
  value,
});

/**
 * editUserAction
 * @param {string} value
 * @returns {Object}
 */
const editUserAction = (value) => ({
  type: types.EDIT_USER,
  value,
});

/**
 * saveUsersList
 * @param {string} value
 * @returns {Object}
 */
const saveUsersList = (value) => ({
  type: types.SAVE_USERS,
  value,
});

export {
  addUserAction,
  deleteUserAction,
  editUserAction,
  saveUsersList,
  activeUserAction,
};
