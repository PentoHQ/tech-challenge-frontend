import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { ItemLabel, ItemLabelProps } from './ItemLabel'

export default {
  title: 'Example/ItemLabel',
  component: ItemLabel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ItemLabelProps> = (args) => <ItemLabel {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'ItemLabel',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'ItemLabel',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'ItemLabel',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'ItemLabel',
}
