import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import FormField, { FormFieldProps } from './FormField';

export default {
  title: 'Example/FormField',
  component: FormField,
  argTypes: {},
} as Meta;

const Template: Story<FormFieldProps> = (args) => <FormField {...args} />;

export const DefaultFormField = Template.bind({});
DefaultFormField.args = {
  id: 'test',
  name: 'test',
  value: 'test',
};

export const FormFieldWithPlaceholder = Template.bind({});
FormFieldWithPlaceholder.args = {
  id: 'test',
  name: 'test',
  value: 'test',
  placeholder: 'test',
};

export const FormFieldWithLabel = Template.bind({});
FormFieldWithLabel.args = {
  id: 'test',
  name: 'test',
  value: 'test',
  label: 'test',
};
