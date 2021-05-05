import { render } from '@testing-library/react'
import DeleteButton, { DeleteButtonProps } from './DeleteButton'

function getWrapper(props: DeleteButtonProps) {
  return render(<DeleteButton {...props} />)
}

describe('<DeleteButton/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })

    expect(wrapper.queryByRole('button')).toBeInTheDocument()
  })
})
