import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './Spinner'

function getWrapper(props) {
  return shallow(<Spinner {...props} />)
}

describe('<Spinner/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ size: 'small' })

    expect(wrapper.hasClass('small')).toBeTruthy()
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })
})
