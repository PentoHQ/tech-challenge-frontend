import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Timer, { TimerProps } from './Timer';

export default {
  title: 'Example/Timer',
  component: Timer,
  argTypes: {},
} as Meta;

const Template: Story<TimerProps> = (args) => <Timer {...args} />;

export const DefaultTimer = Template.bind({});
DefaultTimer.args = {
  startDate: new Date(),
};

export const H3Timer = Template.bind({});
H3Timer.args = {
  startDate: new Date(),
  size: 'h3',
};
