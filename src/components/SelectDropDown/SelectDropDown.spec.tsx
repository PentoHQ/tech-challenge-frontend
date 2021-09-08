import React from 'react'
import { shallow } from 'enzyme'
import SelectDropDown from './SelectDropDown'

function getWrapper(props) {
  return shallow(<SelectDropDown {...props} />)
}

describe('<SelectDropDown/>', () => {
  const onChange = jest.fn()
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!', onChange })

    expect(wrapper.text()).toEqual('Hello!')
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ children: 'Hello!', className: 'test-class', onChange })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('on click', () => {
    const wrapper = getWrapper({ onChange })

    wrapper.simulate('click')

    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
