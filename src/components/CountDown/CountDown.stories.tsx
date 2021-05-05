import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { CountDown, CountDownProps } from './CountDown'

export default {
  title: 'Example/CountDown',
  component: CountDown,
  argTypes: {},
} as Meta

const Template: Story<CountDownProps> = (args) => <CountDown {...args} />

export const Primary = Template.bind({})
Primary.args = {
  startTime: new Date(),
}
