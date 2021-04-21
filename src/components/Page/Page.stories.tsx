import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Page, PageProps } from './Page'

export default {
  title: 'Example/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<PageProps> = (args) => <Page {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Page',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Page',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Page',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Page',
}
