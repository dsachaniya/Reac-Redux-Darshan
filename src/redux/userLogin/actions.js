import types from './type';

/**
 * userLoginAction
 * @param {string} value
 * @returns {Object}
 */
const userLoginAction = (value) => (dispatch) => {
  dispatch({
    type: types.USER_LOGIN_IN_PROGRESS,
  });
  setTimeout(() => {
    dispatch({
      type: types.USER_LOGIN,
      value,
    });
    dispatch({
      type: types.USER_LOGIN_COMPLETED,
    });
  }, 1000);
};

export default userLoginAction;
