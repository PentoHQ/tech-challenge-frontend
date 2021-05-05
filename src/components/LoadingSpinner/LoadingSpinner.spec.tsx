import { render } from '@testing-library/react'
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner'

function getWrapper(props: LoadingSpinnerProps) {
  return render(<LoadingSpinner {...props} />)
}
describe('<LoadingSpinner/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({})
    expect(wrapper.container).toBeInTheDocument()
  })
})
