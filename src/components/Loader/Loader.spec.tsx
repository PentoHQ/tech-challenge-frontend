import React from 'react'
import { mount } from 'enzyme'
import Loader from './Loader'

function getWrapper(props) {
  return mount(<Loader {...props} />)
}

describe('<Loader/>', () => {
  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })
})
