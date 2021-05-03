import { cleanup, fireEvent, render } from '@testing-library/react'
import { Modal, ModalProps } from './Modal'

const root = global.document.createElement('div')
root.setAttribute('id', 'root')
const body = global.document.querySelector('body') as HTMLElement
body.appendChild(root)

const closeModal = jest.fn()

const defaultProps: ModalProps = {
  children: 'Hello!',
  closeModal,
  isOpen: true,
}

function getWrapper(props: Partial<ModalProps> = {}) {
  return render(<Modal {...defaultProps} {...props} />)
}

describe('<Modal/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    const { getByText } = getWrapper()

    expect(getByText('Hello!')).toBeInTheDocument()
  })

  it('closes modal on close button click', () => {
    const { getByTitle } = getWrapper()

    fireEvent.click(getByTitle('Close'))

    expect(closeModal).toHaveBeenCalledTimes(1)
  })

  it('closes modal on keydown Escape', () => {
    const { getByRole } = getWrapper()

    fireEvent.keyDown(getByRole('dialog'), { key: 'Escape' })

    expect(closeModal).toHaveBeenCalledTimes(1)
  })
})
