import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputText, { InputProps } from './InputText'

function getWrapper(props: InputProps) {
  return render(<InputText {...props} />)
}

describe('<Input/>', () => {
  it('renders', async () => {
    const onChange = jest.fn()
    const wrapper = getWrapper({ placeholder: 'label', value: 'val', onChange })
    const input = wrapper.getByDisplayValue('val')
    expect(wrapper.getByPlaceholderText('Label')).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    userEvent.type(input, '{selectall}{del}new')
    expect(onChange).toHaveBeenCalledTimes(4)
  })
})
