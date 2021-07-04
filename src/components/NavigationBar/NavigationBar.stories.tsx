// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import NavigationBar, { NavigationBarProps } from './NavigationBar';
import NavigationItem from '../NavigationItem';

export default {
  title: 'Example/NavigationBar',
  component: NavigationBar,
  subcomponents: { NavigationItem },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const Template: Story<NavigationBarProps> = (args) => (
  <NavigationBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <NavigationItem url="Url 1">
      <span>Test</span>
    </NavigationItem>,
    <NavigationItem url="Url 2">
      <span>Test</span>
    </NavigationItem>,
    <NavigationItem url="Url 3">
      <span>Test</span>
    </NavigationItem>,
  ],
};
