import React, { useState } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Tabs, { TabsProps, Tab } from './Tabs'

export default {
  title: 'Example/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TabsProps> = (args) => {
  const [selected, setSelected] = useState('first')
  return (
    <Tabs {...args} selected={selected} onChange={setSelected}>
      <Tab label="First" value="first" />
      <Tab label="Second" value="second" />
      <Tab label="Third" value="third" />
    </Tabs>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  size: 'medium',
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
