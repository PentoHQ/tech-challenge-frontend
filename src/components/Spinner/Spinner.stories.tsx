import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Spinner, SpinnerProps } from './Spinner'

export default {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />
