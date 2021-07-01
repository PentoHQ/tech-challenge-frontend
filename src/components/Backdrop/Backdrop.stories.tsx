import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Backdrop, BackdropProps } from './Backdrop'

export default {
  title: 'Example/Backdrop',
  component: Backdrop,
  argTypes: {},
} as Meta

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Backdrop',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Backdrop',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Backdrop',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Backdrop',
}
