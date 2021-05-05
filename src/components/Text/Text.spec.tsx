import { render } from '@testing-library/react'

import Text, { TextProps } from './Text'

function getWrapper(props: TextProps) {
  return render(<Text {...props} />)
}

describe('<Text/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Text', variant: 'title' })
    expect(wrapper.getByText('Text')).toBeInTheDocument()
  })
})
