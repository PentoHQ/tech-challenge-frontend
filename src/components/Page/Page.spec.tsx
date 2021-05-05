import { render } from '@testing-library/react'

import Page, { PageProps } from './Page'

function getWrapper(props: PageProps) {
  return render(<Page {...props} />)
}

describe('<Page/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })
    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })
})
