import React, { useState, Fragment } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Modal, ModalProps } from './Modal'
import Button from 'components/Button'

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setState] = useState(args.open)
  const props = { ...args, onClose: () => setState(false), open: isOpen }
  return (
    <Fragment>
      <Button color="primary" onClick={() => setState(true)}>
        Open modal
      </Button>
      <Modal {...props} />
    </Fragment>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Cats have 32 muscles in each ear',
  headline: 'Cat Facts',
  actionTitle: 'Save',
  cancelTitle: 'Cancel',
}
