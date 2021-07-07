import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from './Modal';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const HideModal = Template.bind({});
HideModal.args = {
  title: 'Modal Title',
  children: 'Modal',
  visible: false,
};

export const VisibleModal = Template.bind({});
VisibleModal.args = {
  title: 'Modal Title',
  children: 'Modal',
  visible: true,
};
