import types from './type';
import reducer from './reducer';

const intitialState = {
  isUserLoggedIn: false,
  loader: false,
};

describe('user login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(intitialState);
  });

  it('should handle USER_LOGIN', () => {
    expect(
      reducer(intitialState, {
        type: types.USER_LOGIN,
        value: {
          username: 'username',
          password: 'passsword',
        },
      }),
    ).toEqual({
      isUserLoggedIn: false,
      loader: false,
    });
  });
});
