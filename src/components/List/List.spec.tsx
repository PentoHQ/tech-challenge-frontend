import { render } from '@testing-library/react'
import List, { ListProps } from './List'

function getWrapper(props: ListProps) {
  return render(<List {...props} />)
}

describe('<List/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })

    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })
})
