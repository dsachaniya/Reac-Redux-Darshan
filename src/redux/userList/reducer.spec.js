import types from './type';
import reducer from './reducer';

const intitialState = {
  users: [],
  activeUser: {},
};

describe('user list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(intitialState);
  });

  it('should handle SAVE_USERS', () => {
    expect(
      reducer(intitialState, {
        type: types.SAVE_USERS,
        value: [
          {
            first_name: 'first_name',
            last_name: 'last_name',
          },
        ],
      }),
    ).toEqual({
      users: [
        {
          first_name: 'first_name',
          last_name: 'last_name',
        },
      ],
      activeUser: {},
    });
  });
});
