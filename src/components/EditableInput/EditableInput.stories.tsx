import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { EditableInput, EditableInputProps } from './EditableInput'

export default {
  title: 'Example/EditableInput',
  component: EditableInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<EditableInputProps> = (args) => <EditableInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'EditableInput',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'EditableInput',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'EditableInput',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'EditableInput',
}
