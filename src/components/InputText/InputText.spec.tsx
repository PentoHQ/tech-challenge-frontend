import React from 'react';
import { mount } from 'enzyme';
import InputText from './InputText';

function getWrapper(props: any) {
  return mount(<InputText {...props} />);
}

describe('<Input/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ label: 'Hello!' });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ label: 'Hello!', className: 'test-class' });

    expect(wrapper.hasClass('test-class')).toBeTruthy();
  });

  it('on change input', () => {
    const onChange = jest.fn();
    const wrapper = getWrapper({ onChange });

    wrapper
      .find('input')
      .simulate('change', { target: { value: 'input value' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
