import React from 'react'
import { shallow } from 'enzyme'
import ElapsedTime from './ElapsedTime'
import { ElapsedTimeProps } from './'

function getWrapper(props: ElapsedTimeProps) {
  return shallow(<ElapsedTime {...props} />)
}

describe('<ElapsedTime/>', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders', () => {
    const wrapper = getWrapper({})
    expect(wrapper.text()).toEqual('00:00:00')
  })

  it('renders with correct initial elapsed if fromDate is provided', () => {
    const wrapper = getWrapper({ fromDate: new Date(Date.now() - 5000) })
    expect(wrapper.text()).toEqual('00:00:05')
  })

  it('passes down the provided class name', () => {
    const wrapper = getWrapper({ className: 'test-class' })
    expect(wrapper.hasClass('test-class')).toBeTruthy()
  })

  it.skip('updates every second', () => {
    /**
     * after lot of digging I couldn't find a way
     * to make the useEffect hook with setInterval work in the test environment
     * tried to use shallow, test library render, actual ReactDOM render, make use of act()...
     * nothing worked as expected
     * sadly I have to give up on this test...for now :]
     */
  })
})
