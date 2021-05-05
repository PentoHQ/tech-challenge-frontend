import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { DeleteButton, DeleteButtonProps } from './DeleteButton'

export default {
  title: 'Example/DeleteButton',
  component: DeleteButton,
  argTypes: {},
} as Meta

const Template: Story<DeleteButtonProps> = (args) => <DeleteButton {...args} />

export const Default = Template.bind({})
