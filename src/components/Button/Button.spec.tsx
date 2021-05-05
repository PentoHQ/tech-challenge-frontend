import { render } from '@testing-library/react'
import Button, { ButtonProps } from './Button'

function getWrapper(props: ButtonProps) {
  return render(<Button {...props} />)
}

describe('<Button/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })
    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })
})
