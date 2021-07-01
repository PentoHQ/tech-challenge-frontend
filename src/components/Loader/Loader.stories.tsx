import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Loader, LoaderProps } from './Loader'

export default {
  title: 'Example/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<LoaderProps> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'Loader',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Loader',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Loader',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Loader',
}
