import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

function getWrapper(props: any) {
  return shallow(<Error {...props} />);
}

describe('<Error/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ children: 'Hello!', className: 'test-class' });

    expect(wrapper.hasClass('test-class')).toBeTruthy();
  });
});
