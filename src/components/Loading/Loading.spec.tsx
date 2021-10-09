import { shallow } from 'enzyme'
import Loading from './Loading'

const getWrapper = () => {
  return shallow(<Loading />)
}

describe('<Loading/>', () => {
  it('renders', () => {
    const wrapper = getWrapper()

    expect(wrapper.text()).toEqual('Loading...')
  })
})
