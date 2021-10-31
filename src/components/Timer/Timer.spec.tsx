import React from 'react'
import { act, render } from '@testing-library/react'

import { Timer } from './Timer'

describe('Timer', () => {
  it('renders', () => {
    const start = new Date()

    const { getByTestId } = render(<Timer start={start} />)
    const timer = getByTestId('session-timer')

    expect(timer.textContent).toEqual('00:00:00')
  })

  it('return passed time', () => {
    jest.useFakeTimers()

    const start = new Date()
    const { getByTestId } = render(<Timer start={start} />)

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    const timer = getByTestId('session-timer')

    expect(timer.textContent).toEqual('00:00:03')
  })
})
