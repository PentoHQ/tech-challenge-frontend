import { shallow } from 'enzyme';

import Timer, { TimerProps } from './Timer';

function getWrapper(props: TimerProps) {
  return shallow(<Timer {...props} />);
}

describe('<Timer/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({ startDate: new Date() });
    expect(wrapper.html()).toBeTruthy();
  });
});
