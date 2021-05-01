import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { StopWatch, StopWatchProps } from './StopWatch'

export default {
  title: 'Example/StopWatch',
  component: StopWatch,
} as Meta

const Template: Story<StopWatchProps> = (args) => <StopWatch {...args} />

export const Main = Template.bind({})
Main.args = {
  startDate: new Date(),
}
