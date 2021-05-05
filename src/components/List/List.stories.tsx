import { Story, Meta } from '@storybook/react/types-6-0'
import ApolloWrapper from '../../features/Apollo/ApolloWrapper'
import { Auth0Provider } from '@auth0/auth0-react'
import { List, ListProps } from './List'
import ListItem from '../ListItem'
import auth0 from '../../auth0'

export default {
  title: 'Example/List',
  component: List,
  subcomponents: { ListItem },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

const Template: Story<ListProps> = (args) => (
  <Auth0Provider
    domain={auth0.domain}
    clientId={auth0.clientId}
    redirectUri={window.location.origin}
    audience="pento-time-track"
  >
    <ApolloWrapper>
      <List {...args} />
    </ApolloWrapper>
  </Auth0Provider>
)

export const Basic = Template.bind({})
Basic.args = {
  children: [
    <ListItem key={1} id={1} title="Item 1" subtitle="awesome subtitle"></ListItem>,
    <ListItem key={2} id={2} title="Item 2" subtitle="awesome subtitle"></ListItem>,
    <ListItem key={3} id={3} title="Item 3" subtitle="awesome subtitle"></ListItem>,
  ],
}

export const DisableGutters = Template.bind({})
DisableGutters.args = {
  children: [
    <ListItem key={1} id={1} title="Item 1" subtitle="awesome subtitle" disableGutters></ListItem>,
    <ListItem key={2} id={2} title="Item 2" subtitle="awesome subtitle" disableGutters></ListItem>,
    <ListItem key={3} id={3} title="Item 3" subtitle="awesome subtitle"></ListItem>,
  ],
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'List',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'List',
}
