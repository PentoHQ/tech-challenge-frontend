import { Meta, Story } from '@storybook/react/types-6-0'
import { Loading } from './Loading'

export default {
  title: 'Example/Loading',
  component: Loading,
} as Meta

const Template: Story = () => <Loading />

export const Primary = Template.bind({})
