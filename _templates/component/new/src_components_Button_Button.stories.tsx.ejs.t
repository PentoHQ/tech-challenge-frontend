---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.stories.tsx
---
import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { <%= h.capitalize(name) %>, <%= h.capitalize(name) %>Props } from './<%= h.capitalize(name) %>'

export default {
  title: 'Example/<%= h.capitalize(name) %>',
  component: <%= h.capitalize(name) %>,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<<%= h.capitalize(name) %>Props> = (args) => <<%= h.capitalize(name) %> {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: '<%= h.capitalize(name) %>',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: '<%= h.capitalize(name) %>',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: '<%= h.capitalize(name) %>',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: '<%= h.capitalize(name) %>',
}
