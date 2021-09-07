import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { CenteredText, CenteredTextProps } from './CenteredText'

export default {
  title: 'Example/CenteredText',
  component: CenteredText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CenteredTextProps> = (args) => <CenteredText {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'CenteredText',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'CenteredText',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'CenteredText',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'CenteredText',
}
