import React from 'react';
import { shallow } from 'enzyme';
import Tabs, { Tab } from './Tabs';

function getWrapper(props) {
  return shallow(<Tabs {...props} />);
}

describe('<Tabs/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: <Tab /> });

    expect(wrapper.html()).toBeTruthy();
  });

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ children: <Tab />, className: 'test-class' });

    expect(wrapper.hasClass('test-class')).toBeTruthy();
  });
});
