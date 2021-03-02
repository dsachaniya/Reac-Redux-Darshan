import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('<Main />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<Main />);
    // 1. Snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
