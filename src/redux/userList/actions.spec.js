import types from './type';
import { addUserAction } from './actions';

describe('user list actions', () => {
  it('add user', () => {
    const value = 'Test';

    const expectedAction = {
      type: types.ADD_USER,
      value,
    };

    expect(addUserAction(value)).toEqual(expectedAction);
  });
});
