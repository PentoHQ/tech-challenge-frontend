import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';

function getWrapper(props) {
  return shallow(<NavigationBar {...props} />);
}

describe('<NavigationBar/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ children: 'Hello!', className: 'test-class' });

    expect(wrapper.hasClass('test-class')).toBeTruthy();
  });
});
