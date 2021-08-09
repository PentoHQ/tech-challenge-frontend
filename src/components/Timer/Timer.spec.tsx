import React from 'react'
import { mount } from 'enzyme'
import Timer from './Timer'

function getWrapper(props) {
  return mount(<Timer {...props} />)
}

describe('<Timer/>', () => {
  it('renders', () => {
    const wrapper = getWrapper()

    expect(wrapper.html()).toBeTruthy()
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })
})
