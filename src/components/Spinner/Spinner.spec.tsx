import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './Spinner'
import { SpinnerProps } from '.'

function getWrapper(props: SpinnerProps) {
  return shallow(<Spinner {...props} />)
}

describe('<Spinner/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({})

    // spinner do not have children, so..
    expect(wrapper.hasClass('spinner')).toBeTruthy()
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('renders with provided size', () => {
    const smallWrapper = getWrapper({ size: 'small' })
    expect(smallWrapper.hasClass('small')).toBeTruthy()

    const mediumWrapper = getWrapper({ size: 'medium' })
    expect(mediumWrapper.hasClass('medium')).toBeTruthy()

    const largeWrapper = getWrapper({ size: 'large' })
    expect(largeWrapper.hasClass('large')).toBeTruthy()
  })

  it('renders with provided color', () => {
    const primaryWrapper = getWrapper({ color: 'primary' })
    expect(primaryWrapper.hasClass('primary')).toBeTruthy()

    const secondaryWrapper = getWrapper({ color: 'secondary' })
    expect(secondaryWrapper.hasClass('secondary')).toBeTruthy()
  })
})
