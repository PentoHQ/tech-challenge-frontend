import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { List, ListProps } from './List'
import ListItem from '../ListItem'

export default {
  title: 'Example/List',
  component: List,
  subcomponents: { ListItem },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

const Template: Story<ListProps> = (args) => <List {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: [
    <ListItem id={'0'} title="Item 1" subtitle="awesome subtitle"></ListItem>,
    <ListItem id={'1'} title="Item 2" subtitle="awesome subtitle"></ListItem>,
    <ListItem id={'2'} title="Item 3" subtitle="awesome subtitle"></ListItem>,
  ],
}

export const DisableGutters = Template.bind({})
DisableGutters.args = {
  children: [
    <ListItem id={'0'} title="Item 1" subtitle="awesome subtitle" disableGutters></ListItem>,
    <ListItem id={'1'} title="Item 2" subtitle="awesome subtitle" disableGutters></ListItem>,
    <ListItem id={'2'} title="Item 3" subtitle="awesome subtitle"></ListItem>,
  ],
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'List',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'List',
}
