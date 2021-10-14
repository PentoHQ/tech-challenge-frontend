import React from 'react'
import { shallow } from 'enzyme'
import Modal, { ModalCloseReason } from './Modal'
import { ModalProps } from './'
import Backdrop from '../Backdrop'
import styles from './Modal.module.scss'

function getWrapper(props: ModalProps) {
  return shallow(<Modal {...props} />)
}

describe('<Modal/>', () => {
  it('renders inside backdrop', () => {
    const wrapper = getWrapper({ children: 'Hello!' })
    const foundBackdrops = wrapper.find(Backdrop)

    expect(foundBackdrops.length).toBe(1)

    const modal = foundBackdrops.children()
    expect(modal.hasClass(styles.modal)).toBeTruthy()
  })

  it('passes down to the card the provided class name', () => {
    const wrapper = getWrapper({ children: 'Hello!', className: 'test-class' })
    const modal = wrapper.find(Backdrop).children()
    expect(modal.hasClass('test-class')).toBeTruthy()
  })

  it('renders children', () => {
    const children = 'We are the..'
    const wrapper = getWrapper({ children })
    expect(wrapper.contains(children)).toBeTruthy()
  })

  it('renders title if title prop is provided', () => {
    const title = 'Awesome title'
    const wrapper = getWrapper({ children: 'Hello!', title })
    expect(wrapper.contains(title)).toBeTruthy()
  })

  it('renders footer if footer prop is provided', () => {
    const footer = <div />
    const wrapper = getWrapper({ children: 'Hello!', footer })
    expect(wrapper.contains(footer)).toBeTruthy()
  })

  // This test works only if the event is registered in component render and NOT in a useEffect hook
  // TODO: find a way to properly test feature involving the useEffect hook
  it.skip('triggers onClose when esc key is pressed (keyup)', async () => {
    const onClose = jest.fn((reason: ModalCloseReason) => {})

    getWrapper({ children: 'Hello!', onClose })

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', which: 27 }))

    expect(onClose).toBeCalledTimes(1)
    expect(onClose).toBeCalledWith<[ModalCloseReason]>('esc-pressed')
  })

  it('triggers onClose when backdrop is clicked', () => {
    const onClose = jest.fn((reason: ModalCloseReason) => {})
    const wrapper = getWrapper({ children: 'Hello!', onClose })

    wrapper.simulate('click', new Event('click'))

    expect(onClose).toBeCalledTimes(1)
    expect(onClose).toBeCalledWith<[ModalCloseReason]>('click-outside')
  })
})
