import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { SectionHeader, SectionHeaderProps } from './SectionHeader'

export default {
  title: 'Example/SectionHeader',
  component: SectionHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<SectionHeaderProps> = (args) => <SectionHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'SectionHeader',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'SectionHeader',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'SectionHeader',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'SectionHeader',
}
