import { render } from '@testing-library/react'

import FormRow, { FormRowProps } from './FormRow'

function getWrapper(props: FormRowProps) {
  return render(<FormRow {...props} />)
}

describe('<FormRow/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!', alignY: 'center' })
    expect(wrapper.getByText('Hello!')).toBeInTheDocument()
  })

  it('each child is wrapped on an item', () => {
    const wrapper = getWrapper({ children: ['Test1', 'Test2'], alignY: 'bottom' })
    const firstItem = wrapper.getByText('Test1')
    const lastItem = wrapper.getByText('Test2')
    expect(firstItem).toHaveClass('formItem')
    expect(lastItem).toHaveClass('formItem')
  })

  it('if children has a className it is injected to the FormItem', () => {
    const wrapper = getWrapper({
      children: [
        <span key="1" className="test1">
          Test1
        </span>,
        <span key="2" className="test2">
          Test2
        </span>,
      ],
      alignY: 'top',
    })

    const firstItem = wrapper.getByText('Test1')
    const lastItem = wrapper.getByText('Test2')

    expect(firstItem).toHaveClass('test1')
    expect(lastItem).toHaveClass('test2')
  })
})
