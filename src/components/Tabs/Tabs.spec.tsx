import React from 'react';
import { shallow } from 'enzyme';
import Tabs, { Tab } from './Tabs';

function getWrapper(props: any) {
  return shallow(<Tabs {...props} />);
}

describe('<Tabs/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({
      children: <Tab label="sessions" value="/" to="/" />,
    });

    expect(wrapper.html()).toBeTruthy();
  });

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({
      children: <Tab label="sessions" value="/" to="/" />,
      className: 'test-class',
    });

    expect(wrapper.hasClass('test-class')).toBeTruthy();
  });
});
