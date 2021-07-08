import { shallow } from 'enzyme';
import Loading, { LoadingProps } from './Loading';

function getWrapper(props: LoadingProps) {
  return shallow(<Loading {...props} />);
}
describe('<Loading/>', () => {
  it('renders', () => {
    const wrapper = getWrapper({});
    expect(wrapper.length).toBe(1);
  });
});
