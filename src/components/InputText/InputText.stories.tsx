import { useState } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { InputText, InputProps } from './InputText'

export default {
  title: 'Example/Input',
  component: InputText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<InputProps> = (args) => {
  const [state, setState] = useState('')
  const props = { ...args, onChange: setState, value: state }
  return <InputText {...props} />
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'text input',
  placeholder: 'placeholder text',
}

export const Secondary = Template.bind({})
Secondary.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
