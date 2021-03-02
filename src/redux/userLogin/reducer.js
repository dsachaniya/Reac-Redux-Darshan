import types from './type';

const intitialState = {
  isUserLoggedIn: false,
  loader: false,
};

// default users
const users = [
  {
    username: 'dms94260',
    password: 'dms94260',
  },
  {
    username: 'truckx',
    password: 'truckx',
  },
  {
    username: 'admin',
    password: 'admin',
  },
];

// authentica the user
const authenticateUser = (un, pw) => {
  return (
    !!users.find((user) => user.username === un && user.password === pw) ||
    false
  );
};

const userLogin = (state = intitialState, actions) => {
  switch (actions.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        isUserLoggedIn: authenticateUser(
          actions.value.username,
          actions.value.password,
        ),
      };
    case types.USER_LOGIN_IN_PROGRESS:
      return {
        ...state,
        loader: true,
      };
    case types.USER_LOGIN_COMPLETED:
      return {
        ...state,
        loader: false,
      };
    default:
      return state;
  }
};

export default userLogin;
