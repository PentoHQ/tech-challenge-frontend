import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

function getWrapper(props) {
  return shallow(<Header {...props} />)
}

describe('<Header/>', () => {
  it('renders', () => {
    const wrapper = getWrapper()

    expect(wrapper.html()).toBeTruthy()
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })
})
