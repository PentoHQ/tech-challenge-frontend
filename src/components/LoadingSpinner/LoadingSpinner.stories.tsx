// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { LoadingSpinner, LoadingSpinnerProps } from './LoadingSpinner'

export default {
  title: 'Example/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {},
} as Meta

const Template: Story<LoadingSpinnerProps> = (args) => <LoadingSpinner {...args} />

export const Default = Template.bind({})
export const Fullscreen = Template.bind({})
Fullscreen.args = {
  fullscreen: true,
}
