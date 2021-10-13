import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './Spinner'
import { SpinnerProps } from '.'
import Backdrop from 'components/Backdrop'

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

  it('renders wrapped in a Backdrop if withBackdrop is true', () => {
    const wrapper = getWrapper({ withBackdrop: true })

    const foundBackdrops = wrapper.find(Backdrop)
    expect(foundBackdrops.length).toBe(1)

    const spinner = foundBackdrops.children()
    expect(spinner.hasClass('spinner')).toBeTruthy()
  })

  it('Backdrop should have additional props if provided', () => {
    const wrapper = getWrapper({ withBackdrop: true, backdropProps: { backgroundColor: 'green' } })
    expect(wrapper.find(Backdrop).props().backgroundColor).toBe('green')
  })
})
