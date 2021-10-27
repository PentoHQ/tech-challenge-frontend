import React from 'react'
import { shallow } from 'enzyme'
import Timer from './Timer'

function getWrapper(props) {
  return shallow(<Timer {...props} />)
}

describe('<Timer/>', () => {
  afterAll(() => {
    jest.useRealTimers()
  })

  it('renders', () => {
    const wrapper = getWrapper({ start: new Date() })

    expect(wrapper.text()).toEqual('0:0:0')
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ start: new Date(), className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('on click', () => {
    const onClick = jest.fn()
    const wrapper = getWrapper({ onClick })

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
