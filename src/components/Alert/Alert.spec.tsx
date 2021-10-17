import React from 'react'
import { shallow } from 'enzyme'
import Alert from './Alert'
import { AlertProps } from './'
import Text from '../Text'
import styles from './Alert.module.scss'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

function getWrapper(props: AlertProps) {
  return shallow(<Alert {...props} />)
}

describe('<Alert/>', () => {
  it('renders with provided text', () => {
    const wrapper = getWrapper({ text: 'Hello!' })
    const textContainer = wrapper.find(Text)

    expect(textContainer.contains('Hello!')).toBeTruthy()
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ text: 'Hello!', className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('on click', () => {
    const onClick = jest.fn()
    const wrapper = getWrapper({ onClick })

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('render success', () => {
    const wrapper = getWrapper({ text: 'Hello!', kind: 'success' })
    expect(wrapper.hasClass(styles.success)).toBeTruthy()
    expect(wrapper.find(CheckCircleIcon)).toBeDefined()
  })

  it('render info', () => {
    const wrapper = getWrapper({ text: 'Hello!', kind: 'info' })
    expect(wrapper.hasClass(styles.info)).toBeTruthy()
    expect(wrapper.find(InformationCircleIcon)).toBeDefined()
  })

  it('render warning', () => {
    const wrapper = getWrapper({ text: 'Hello!', kind: 'warning' })
    expect(wrapper.hasClass(styles.warning)).toBeTruthy()
    expect(wrapper.find(ExclamationIcon)).toBeDefined()
  })

  it('render error', () => {
    const wrapper = getWrapper({ text: 'Hello!', kind: 'error' })
    expect(wrapper.hasClass(styles.error)).toBeTruthy()
    expect(wrapper.find(ExclamationCircleIcon)).toBeDefined()
  })
})
