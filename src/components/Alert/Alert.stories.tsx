import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Alert, AlertProps } from './Alert'

export default {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
    kind: { defaultValue: 'info' },
    size: { defaultValue: 'medium' },
    text: { defaultValue: 'This is an alert!' },
  },
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Error = Template.bind({})
Error.args = {
  kind: 'error',
}

export const Warning = Template.bind({})
Warning.args = {
  kind: 'warning',
}

export const Info = Template.bind({})
Info.args = {
  kind: 'info',
}

export const Success = Template.bind({})
Success.args = {
  kind: 'success',
}
