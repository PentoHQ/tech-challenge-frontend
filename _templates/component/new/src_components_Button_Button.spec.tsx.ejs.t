---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.spec.tsx
---
import React from 'react'
import { shallow } from 'enzyme'
import <%= h.capitalize(name) %> from './<%= h.capitalize(name) %>'

function getWrapper(props) {
  return shallow(<<%= h.capitalize(name) %> {...props} />)
}

describe('<<%= h.capitalize(name) %>/>', () => {
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
