import React from 'react'
import { mount } from 'enzyme'
import PlayButton from './PlayButton'

function getWrapper(props) {
  return mount(<PlayButton {...props} />)
}

describe('<PlayButton/>', () => {
  it('renders', () => {
    const wrapper = getWrapper()

    expect(wrapper.html()).toBeTruthy()
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ className: 'test-class' })

    expect(wrapper.find('button').hasClass('test-class')).toBeTruthy()
  })

  it('on click', () => {
    const onClick = jest.fn()
    const wrapper = getWrapper({ onClick })

    wrapper.find('button').simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
