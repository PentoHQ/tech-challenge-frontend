import { render } from '@testing-library/react'

import IconButton, { IconButtonProps } from './IconButton'

function getWrapper(props: IconButtonProps) {
  return render(<IconButton {...props} />)
}

describe('<Page/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })
    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })
})
