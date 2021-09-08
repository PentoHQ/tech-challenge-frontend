import React from 'react'
import { shallow } from 'enzyme'
import Timer from './Timer'

function getWrapper(props) {
  return shallow(<Timer {...props} />)
}

describe('<Timer/>', () => {
  const today = new Date()
  it('renders', () => {
    today.setHours(today.getHours() + 4)
    const wrapper = getWrapper({ startDate: today })

    expect(wrapper.text()).toEqual('3 hours : 59 min : 59 sec')
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ startDate: today, children: 'Hello!', className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('on click', () => {
    const onClick = jest.fn()
    const wrapper = getWrapper({ onClick, startDate: today })

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
