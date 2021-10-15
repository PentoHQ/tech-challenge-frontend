import React from 'react'
import { mount } from 'enzyme'
import InputText from './InputText'
import { InputProps } from '.'

function getWrapper(props: InputProps) {
  return mount(<InputText {...props} />)
}

describe('<Input/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ label: 'Hello!' })

    expect(wrapper.text()).toEqual('Hello!')
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ label: 'Hello!', className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('on change input', () => {
    const onChange = jest.fn()
    const wrapper = getWrapper({ onChange })

    wrapper.find('input').simulate('change', { target: { value: 'input value' } })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('disable', () => {
    const wrapper = getWrapper({ disabled: true })
    expect(wrapper.find('input').prop('disabled')).toBeTruthy()
  })
})
