import React from 'react'
import { shallow } from 'enzyme'
import Timer from './Timer'
import { render, cleanup, act } from '@testing-library/react'

function getWrapper(props) {
  return shallow(<Timer {...props} />)
}

beforeEach(() => {
  jest.useFakeTimers('modern')
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
  cleanup()
})

describe('<Timer/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ start: new Date() })

    expect(wrapper.text()).toEqual('0:0:0')
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ start: new Date(), className: 'test-class' })

    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it('on click', () => {
    const onClick = jest.fn()
    const wrapper = getWrapper({ onClick })

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('text changes over time',() => {
    const { container } = render(<Timer start={new Date()} />)

    expect(container).toHaveTextContent('0:0:0')

    act(() => {
      jest.advanceTimersByTime(2005)
    })

    expect(container).toHaveTextContent('0:0:2')
  })

  it('timer stops correctly',() => {
    const { container, rerender } = render(<Timer start={new Date()} />)

    expect(container).toHaveTextContent('0:0:0')

    act(() => {
      jest.advanceTimersByTime(2005)
    })

    rerender(<Timer isStopped={true} />)

    expect(container).toHaveTextContent('0:0:2')
  })
})
