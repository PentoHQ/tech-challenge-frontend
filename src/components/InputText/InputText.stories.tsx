import { Meta, Story } from '@storybook/react/types-6-0'
import InputText from './InputText'
import type { InputProps } from './InputText'

export default {
  title: 'Example/Input',
  component: InputText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<InputProps> = (args) => {
  return <InputText {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'text input',
  placeholder: 'placeholder text',
}
