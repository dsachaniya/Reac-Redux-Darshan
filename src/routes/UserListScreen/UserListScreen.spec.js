import React from 'react';
import { shallow } from 'enzyme';
import UserListScreen from './UserListScreen';

describe('<UserListScreen />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<UserListScreen users={[{}]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
