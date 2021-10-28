import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { BarLoader } from './BarLoader'

export default {
  title: 'Example/Loader/BarLoader',
  component: BarLoader,
} as Meta

const Template: Story = () => <BarLoader />

export const Base = Template.bind({})
