import { render } from '@testing-library/react'

import Tabs, { Tab, TabsProps } from './Tabs'

function getWrapper(props: TabsProps) {
  return render(<Tabs {...props} />)
}

const Component = ({ children, ...props }: { children: any }) => <div {...props}>{children}</div>

describe('<Tabs/>', () => {
  it('renders', async () => {
    const wrapper = getWrapper({
      tabComponent: Component,
      children: [
        <Tab key="1" label="tab 1" value="/first" to="/first" />,
        <Tab key="2" label="tab 2" value="/second" to="/second" />,
      ],
      selected: '/second',
    })

    const tabs = await wrapper.findAllByText(/Tab [0-9]/)
    expect(tabs).toHaveLength(2)

    const secondTab = await wrapper.findByText('Tab 2')
    expect(secondTab).toHaveClass('active')
  })
})
