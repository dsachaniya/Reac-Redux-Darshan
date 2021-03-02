import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
describe('<Login />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
