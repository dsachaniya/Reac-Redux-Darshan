import React from 'react';
import { shallow } from 'enzyme';
import RouteNotFound from './404';

describe('<RouteNotFound />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<RouteNotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
