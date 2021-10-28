import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Loader, LoaderProps } from './Loader'

export default {
  title: 'Example/Loader',
  component: Loader,
} as Meta

const Template: Story<LoaderProps> = (args) => <Loader {...args} />

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
