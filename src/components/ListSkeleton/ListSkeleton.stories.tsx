import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { ListSkeleton, ListSkeletonProps } from './ListSkeleton'

export default {
  title: 'Example/ListSkeleton',
  component: ListSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ListSkeletonProps> = (args) => <ListSkeleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'ListSkeleton',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'ListSkeleton',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'ListSkeleton',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'ListSkeleton',
}
