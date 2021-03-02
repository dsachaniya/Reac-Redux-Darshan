import action from './actions';

describe('user login actions', () => {
  it('userLoginActions', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await action('rylauNS2GG')(dispatch, getState);
    jest.runAllTimers();
    expect(dispatch).toBeCalledWith({ type: 'USER_LOGIN_IN_PROGRESS' });
  });
});
