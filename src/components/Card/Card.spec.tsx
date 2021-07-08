import React from 'react';
import { shallow, mount } from 'enzyme';
import Card, { CardContent, RawCard } from './Card';

function getMount(props: any) {
  return mount(<Card {...props} />);
}

describe('<Card/>', () => {
  it('renders', () => {
    const wrapper = getMount({ children: <CardContent>Hello!</CardContent> });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('renders the raw card', () => {
    const wrapper = shallow(<RawCard>Hello!</RawCard>);

    expect(wrapper.text()).toEqual('Hello!');
  });
  it('footer is always the latest', () => {
    const wrapper = getMount({
      children: [
        <CardContent key="first">First</CardContent>,
        <CardContent key="second">Hello!</CardContent>,
      ],
      footer: <CardContent>Footer</CardContent>,
    });

    expect(wrapper.find(CardContent).first().text()).toEqual('First');
    expect(wrapper.find(CardContent).last().text()).toEqual('Footer');
  });
});
