import React from 'react'
import { shallow } from 'enzyme'
import Backdrop from './Backdrop'
import { BackdropProps } from './Backdrop'
import styles from './Backdrop.module.scss'

function getWrapper(props: BackdropProps) {
  return shallow(<Backdrop {...props} />)
}

describe('<Backdrop/>', () => {
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
    const wrapper = getWrapper({ onClick, children: 'Hello!' })

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('show drives "hidden" class', () => {
    const showWrapper = getWrapper({ children: 'Hello!', show: true })
    expect(showWrapper.hasClass(styles.hidden)).toBeFalsy()

    const hiddenWrapper = getWrapper({ children: 'Hello!', show: false })
    expect(hiddenWrapper.hasClass(styles.hidden)).toBeTruthy()
  })
})
