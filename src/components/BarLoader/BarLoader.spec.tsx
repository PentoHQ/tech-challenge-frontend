import React from 'react'
import { render } from '@testing-library/react'

import { BarLoader } from './BarLoader'

describe('<Loader/>', () => {
  it('renders', () => {
    const { container } = render(<BarLoader />)

    expect(container).toMatchSnapshot()
  })
})
