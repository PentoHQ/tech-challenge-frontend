import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Modal, ModalProps } from './Modal'
import Button from '../Button'
import Text from '../Text'
import FormRow from '../FormRow'

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
    open: { defaultValue: true },
    children: { defaultValue: 'Modal content' },
  },
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const Basic = Template.bind({})
Basic.args = {}

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: 'Awesome modal!',
}

export const WithFooter = Template.bind({})
WithFooter.args = {
  title: 'Even better with footer!',
  footer: (
    <FormRow alignY="center" align="sides" compact={true} stretchChildren={false}>
      <Text>This is the footer</Text>
      <Button onClick={action('clicked footer button')}>OMG a button here</Button>
    </FormRow>
  ),
}

export const WithBackdropAdditionalProps = Template.bind({})
WithBackdropAdditionalProps.args = {
  backdropProps: {
    backgroundColor: 'lightsteelblue',
  },
}
