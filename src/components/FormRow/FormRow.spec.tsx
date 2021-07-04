import React from 'react';
import { shallow } from 'enzyme';
import FormRow from './FormRow';

function getWrapper(props) {
  return shallow(<FormRow {...props} />);
}

describe('<FormRow/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' });

    expect(wrapper.text()).toEqual('Hello!');
  });

  it('each child is wrapped on an item', () => {
    const wrapper = getWrapper({ children: ['Test1', 'Test2'] });

    expect(wrapper.find('.formItem').first().text()).toEqual('Test1');
    expect(wrapper.find('.formItem').last().text()).toEqual('Test2');
  });
  it('if children has a className it is injected to the FormItem', () => {
    const wrapper = getWrapper({
      children: [
        <span key="1" className="test1">
          Test1
        </span>,
        <span key="2" className="test2">
          Test2
        </span>,
      ],
    });

    expect(wrapper.find('.formItem').first().hasClass('test1')).toBeTruthy();
    expect(wrapper.find('.formItem').last().hasClass('test2')).toBeTruthy();
  });
});
