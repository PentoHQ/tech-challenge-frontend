import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Modal from './Modal'

function getWrapper(props) {
  return render(<Modal {...props} />)
}

beforeAll(() => {
  global.scrollTo = jest.fn()
  global.scroll = jest.fn()
})

afterAll(() => {
  jest.clearAllMocks()
  cleanup()
})

describe('<Modal/>', () => {
  it('renders', () => {
    const { getByText } = getWrapper({ children: 'Hello!', open: true })

    expect(getByText('Hello!')).toBeTruthy()
  })

  it('renders cancel button', () => {
    const onClose = jest.fn()

    const { getByText } = getWrapper({
      children: 'Hello!',
      open: true,
      cancelTitle: 'Cancel',
      onClose,
    })

    expect(getByText('Cancel')).toBeTruthy()

    fireEvent.click(getByText('Cancel'))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders action button', () => {
    const onAction = jest.fn()

    const { getByText } = getWrapper({
      children: 'Hello!',
      open: true,
      actionTitle: 'Save',
      onAction,
    })

    expect(getByText('Save')).toBeTruthy()

    fireEvent.click(getByText('Save'))

    expect(onAction).toHaveBeenCalledTimes(1)
  })
})
