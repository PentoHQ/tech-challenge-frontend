import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { EditModal, EditModalProps } from './EditModal'

export default {
  title: 'Example/EditModal',
  component: EditModal,
  argTypes: {},
} as Meta

const Template: Story<EditModalProps> = (args) => <EditModal {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}

export const Large = Template.bind({})
Large.args = {}

export const Small = Template.bind({})
Small.args = {}
