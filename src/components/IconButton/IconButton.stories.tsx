// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { PlayIcon, StopIcon } from '@heroicons/react/outline';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: <StopIcon /> };

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: <PlayIcon />,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: <PlayIcon />,
};
