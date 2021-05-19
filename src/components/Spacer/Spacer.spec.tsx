import React from 'react'
import { shallow } from 'enzyme'
import Spacer from './Spacer'

function getWrapper(props) {
  return shallow(<Spacer {...props} />)
}

describe('<Spacer/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })

    expect(wrapper.text()).toEqual('Hello!')
  })
})
