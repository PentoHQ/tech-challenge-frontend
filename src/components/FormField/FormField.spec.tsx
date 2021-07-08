import React from 'react';
import { shallow } from 'enzyme';
import FormField, { FormFieldProps } from './FormField';

function getWrapper(props: FormFieldProps) {
  return shallow(<FormField {...props} />);
}

describe('<FormField/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({
      id: 'test',
      name: 'test',
      value: 'test',
      label: 'Hello!',
    });

    expect(wrapper.text()).toContain('Hello!');
  });
});
