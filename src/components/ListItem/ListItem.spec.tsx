import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

function getWrapper(props) {
  return shallow(<ListItem {...props} />);
}

describe('<ListItem/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ title: 'Hello!' });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ title: 'Hello!', className: 'test-class' });

    expect(wrapper.hasClass('test-class')).toBeTruthy();
  });

  it('on click', () => {
    const onClick = jest.fn();
    const wrapper = getWrapper({ onClick });

    wrapper.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
