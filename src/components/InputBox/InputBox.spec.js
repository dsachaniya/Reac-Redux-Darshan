import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './InputBox';

describe('<InputBox />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<InputBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
