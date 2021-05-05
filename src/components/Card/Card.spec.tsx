import { render } from '@testing-library/react'

import Card, { CardContent, RawCard, CardProps } from './Card'

function getWrapper(props: CardProps) {
  return render(<Card {...props} />)
}

describe('<Card/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ bgColor: 'grey', children: <CardContent>Hello!</CardContent> })
    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })

  it('renders the raw card', () => {
    const wrapper = render(<RawCard>Hello!</RawCard>)
    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })

  it('footer is always the latest', () => {
    const { container } = getWrapper({
      children: [
        <CardContent key="first">First</CardContent>,
        <CardContent key="second">Hello!</CardContent>,
      ],
      footer: <CardContent>Footer</CardContent>,
      bgColor: 'grey',
    })

    expect(container.firstChild).toHaveTextContent('First')
    expect(container.lastChild).toHaveTextContent('Footer')
  })
})
