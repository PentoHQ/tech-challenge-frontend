import React from 'react'
import { shallow } from 'enzyme'
import Loader from './Loader'

function getWrapper(props) {
  return shallow(<Loader {...props} />)
}

describe('<Loader/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })

    expect(wrapper.text()).toEqual('Hello!')
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ children: 'Hello!', className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('on click', () => {
    const onClick = jest.fn()
    const wrapper = getWrapper({ onClick })

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
