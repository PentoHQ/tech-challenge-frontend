---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.spec.tsx
---
import { render } from '@testing-library/react'
import <%= h.capitalize(name) %>, { <%= h.capitalize(name) %>Props } from './<%= h.capitalize(name) %>'

function getWrapper(props: <%= h.capitalize(name) %>Props) {
  return render(<<%= h.capitalize(name) %> {...props} />)
}

describe('<<%= h.capitalize(name) %>/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })

    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })
})
