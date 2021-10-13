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

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const WithBackdrop = Template.bind({})
WithBackdrop.args = {
  withBackdrop: true,
}

export const WithBackdropAdditionalProps = Template.bind({})
WithBackdropAdditionalProps.args = {
  withBackdrop: true,
  backdropProps: {
    backgroundColor: 'lightsteelblue',
  },
}
