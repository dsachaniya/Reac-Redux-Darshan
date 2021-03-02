import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Router from './index';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Router />', () => {
  it('Rendering', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
