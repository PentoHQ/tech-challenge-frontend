import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Backdrop, BackdropProps } from './Backdrop'

export default {
  title: 'Example/Backdrop',
  component: Backdrop,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />

export const Show = Template.bind({})
Show.args = {
  show: true,
  children: 'Backdrop',
}

export const Hide = Template.bind({})
Hide.args = {
  show: false,
  children: 'Backdrop',
}
