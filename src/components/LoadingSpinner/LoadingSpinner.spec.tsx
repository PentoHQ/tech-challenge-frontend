import React from 'react'
import { shallow } from 'enzyme'
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner'

function getWrapper(props: LoadingSpinnerProps) {
  return shallow(<LoadingSpinner {...props} />)
}
describe('<LoadingSpinner/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({})

    expect(wrapper.exists()).toBeTruthy()
  })
})
