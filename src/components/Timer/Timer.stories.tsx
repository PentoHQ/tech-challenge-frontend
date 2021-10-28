import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Timer, TimerProps } from './Timer'

export default {
  title: 'Example/Timer',
  component: Timer,
  argTypes: {
    start: { control: 'date' },
  },
} as Meta

const Template: Story<TimerProps> = (args) => <Timer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  start: new Date(),
}