import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import NavigationItem from './NavigationItem';

function getWrapper(props) {
  return shallow(<NavigationItem {...props} />);
}

describe('<NavigationItem/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!', url: '?hello' });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({
      children: 'Hello!',
      className: 'test-class',
      url: '?hello',
    });

    expect(wrapper.hasClass('test-class')).toBeTruthy();
  });

  it('includes link to Mission scene', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <NavigationItem url="?test">Test</NavigationItem>
      </MemoryRouter>
    );
    expect(wrapper.find(Link).props().to).toBe('/stats?test');
  });
});
