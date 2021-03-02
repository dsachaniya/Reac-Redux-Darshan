import React from 'react';
import { shallow } from 'enzyme';
import ReactHelment from './ReactHelment';

/**
 * TestComponent
 * @returns {Node}
 */
function TestComponent() {
  return <div>TEST</div>;
}

describe('<ReactHelment />', () => {
  it('Rendering', () => {
    // 1. Call hoc function
    const Component = ReactHelment(
      TestComponent,
      'Test - React - Redux Darshans',
      'Test to be protected.',
    );
    const wrapper = shallow(<Component />);

    // 2. Snapshot
    expect(wrapper).toMatchSnapshot();

    // 3. Test it contains 'title' and 'meta' tags
    expect(wrapper.find('title')).toHaveLength(1);
    expect(wrapper.find('meta')).toHaveLength(1);

    // 4. Test it renders with proper title and description
    expect(wrapper.find('title').text()).toEqual(
      'Test - React - Redux Darshans',
    );
    expect(wrapper.find('meta').prop('content')).toEqual(
      'Test to be protected.',
    );
  });
});
