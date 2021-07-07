import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Error, { ErrorProps } from './Error';

export default {
  title: 'Example/Error',
  component: Error,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ErrorProps> = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Error',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Error',
};
