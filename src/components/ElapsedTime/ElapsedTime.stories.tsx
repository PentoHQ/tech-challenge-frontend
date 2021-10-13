import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { ElapsedTime, ElapsedTimeProps } from './ElapsedTime'

export default {
  title: 'Example/ElapsedTime',
  component: ElapsedTime,
  argTypes: {
    backgroundColor: { control: 'color' },
    fromDate: { control: 'date' },
  },
} as Meta

const Template: Story<ElapsedTimeProps> = (args) => <ElapsedTime {...args} />

export const FromNow = Template.bind({})
FromNow.args = {}

export const FromEinstenTimeTravel = Template.bind({})
FromEinstenTimeTravel.args = {
  fromDate: new Date(1985, 9, 26, 1, 20, 0),
}
