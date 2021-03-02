import React from 'react';
import { shallow } from 'enzyme';
import RouteAuthentication from './RouteAuthentication';

/**
 * TestComponent
 * @returns {Node}
 */
function TestComponent() {
  return <div>TEST</div>;
}

describe('<RouteAuthentication />', () => {
  let wrapper;
  let Component;
  let ComponentWrapper;
  const props = {
    component: TestComponent,
    path: '/test',
    exact: true,
    isLoggedIn: true,
  };

  beforeEach(() => {
    wrapper = shallow(<RouteAuthentication {...props} />);
    Component = wrapper.find('Route').prop('render');
    ComponentWrapper = shallow(<Component />).dive();
  });

  it('rendering', () => {
    const RouteComponent = wrapper.find('Route');
    expect(wrapper).toMatchSnapshot();
    expect(RouteComponent).toHaveLength(1);
    expect(RouteComponent.prop('path')).toEqual('/test');
    expect(RouteComponent.prop('exact')).toEqual(true);
  });

  it('Authenticated Route', () => {
    expect(ComponentWrapper).toMatchSnapshot();
    expect(ComponentWrapper.find('div')).toHaveLength(1);
    expect(ComponentWrapper.find('div').text()).toEqual('TEST');
  });

  it('UnAuthenticated Route', () => {
    wrapper.setProps({ isLoggedIn: false });
    Component = wrapper.find('Route').prop('render');
    ComponentWrapper = shallow(<Component />);
    expect(ComponentWrapper).toMatchSnapshot();
    expect(ComponentWrapper.find('Redirect')).toHaveLength(1);
  });
});
