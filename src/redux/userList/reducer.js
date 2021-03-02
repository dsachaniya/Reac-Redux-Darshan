/* eslint-disable camelcase */
import types from './type';

const intitialState = {
  users: [],
  activeUser: {},
};

// deleting the user
const removeUser = (id, users) => {
  console.log(users.filter((item) => item.id !== id));
  return users.filter((item) => item.id !== id);
};

// editing the user
const editUser = (id, first_name, last_name, email, users) => {
  const array = [...users];
  const userIndex = users.findIndex((u) => u.id === id);
  array[userIndex].first_name = first_name;
  array[userIndex].last_name = last_name;
  array[userIndex].email = email;
  return array;
};

const userList = (state = intitialState, actions) => {
  switch (actions.type) {
    case types.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          { id: `id${new Date().getTime()}`, ...actions.value },
        ],
      };

    case types.SAVE_USERS:
      return { ...state, users: actions.value };
    case types.ACTIVE_USER:
      return { ...state, activeUser: actions.value };
    case types.DELETE_USER:
      return { ...state, users: removeUser(actions.value, state.users) };
    case types.EDIT_USER: {
      const { value } = actions;
      const { id, first_name, last_name, email } = value;
      return {
        ...state,
        users: editUser(id, first_name, last_name, email, state.users),
      };
    }
    default:
      return state;
  }
};

export default userList;
