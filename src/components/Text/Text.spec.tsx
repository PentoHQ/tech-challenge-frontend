import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

function getWrapper(props: any) {
  return shallow(<Text {...props} />);
}

describe('<Text/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('on change', () => {
    const wrapper = getWrapper({ children: 'Hello!', variant: 'h3' });

    expect(wrapper.text()).toEqual('Hello!');
    expect(wrapper.hasClass('h3')).toBeTruthy();
  });
});
