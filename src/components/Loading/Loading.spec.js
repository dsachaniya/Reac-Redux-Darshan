import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('<Loading />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<Loading />);
    // 1. Snapshot
    expect(wrapper).toMatchSnapshot();

    // 2. Check For the <div>Loading...</div>
    const componentToTest = wrapper.find('div');
    expect(componentToTest).toHaveLength(1);
    expect(componentToTest.text()).toEqual('Loading...');
  });
});
