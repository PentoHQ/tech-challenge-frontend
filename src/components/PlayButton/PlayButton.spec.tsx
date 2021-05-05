import { render } from '@testing-library/react'
import PlayButton, { PlayButtonProps } from './PlayButton'

function getWrapper(props: PlayButtonProps) {
  return render(<PlayButton {...props} />)
}

describe('<PlayButton/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ children: 'Hello!' })

    expect(wrapper.queryByRole('button')).toBeInTheDocument()
  })
})
