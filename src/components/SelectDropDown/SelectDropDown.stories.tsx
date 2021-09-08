import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { SelectDropDown, SelectDropDownProps } from './SelectDropDown'

export default {
  title: 'Example/SelectDropDown',
  component: SelectDropDown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<SelectDropDownProps> = (args) => <SelectDropDown {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'SelectDropDown',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'SelectDropDown',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'SelectDropDown',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'SelectDropDown',
}
