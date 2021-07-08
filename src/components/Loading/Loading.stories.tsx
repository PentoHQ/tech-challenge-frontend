// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Loading, { LoadingProps } from './Loading';

export default {
  title: 'Example/Loading',
  component: Loading,
  argTypes: {},
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
export const LargeLoading = Template.bind({});
LargeLoading.args = {
  size: 'large',
};
export const LinearLoading = Template.bind({});
LinearLoading.args = {
  loadingType: 'linear',
};
