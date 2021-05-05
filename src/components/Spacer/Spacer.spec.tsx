import { render } from '@testing-library/react'

import Spacer, { SpacerProps } from './Spacer'

function getWrapper(props: SpacerProps) {
  return render(<Spacer {...props} />)
}

describe('<Spacer/>', () => {
  it('renders', async () => {
    const wrapper = getWrapper({ children: 'Hello!', className: 'test-classname' })
    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })
})
