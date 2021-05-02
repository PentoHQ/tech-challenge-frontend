import React from 'react'
import { render } from '@testing-library/react'
import CountDown from './CountDown'

function getWrapper(props = {}) {
  return render(<CountDown {...props} />)
}

describe('<CountDown/>', () => {
  beforeEach(() => jest.useFakeTimers())

  it('renders', () => {
    const { getByText } = getWrapper()

    expect(getByText('00:00:00')).toBeInTheDocument()
  })

  it('counts as time goes by', () => {
    const { getByText } = getWrapper()

    jest.advanceTimersByTime(5000)

    expect(getByText('00:00:05')).toBeInTheDocument()
  })

  it('does not count if paused', () => {
    const { getByText } = getWrapper({ isPaused: true })

    jest.advanceTimersByTime(3000)

    expect(getByText('00:00:00')).toBeInTheDocument()
  })
})
