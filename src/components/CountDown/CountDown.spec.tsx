import { render } from '@testing-library/react'

import CountDown, { CountDownProps } from './CountDown'

function getWrapper(props: CountDownProps) {
  return render(<CountDown {...props} />)
}

describe('<CountDown/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ startTime: new Date(Date.now() - 8000) })

    expect(wrapper.getByText('0:0:8')).toBeInTheDocument()
  })
})
