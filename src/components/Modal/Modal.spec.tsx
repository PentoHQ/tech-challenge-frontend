import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

function getWrapper(props: any) {
  return shallow(<Modal {...props} />);
}

describe('<Modal/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' });

    expect(wrapper.text()).toEqual('Hello!');
  });
});
