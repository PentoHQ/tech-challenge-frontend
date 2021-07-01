import PageBody from 'components/Page';
import Spacer from 'components/Spacer';
import MonthChart from './components/MonthChart';

function Stats() {
  return (
    <PageBody>
      <Spacer mb={4}></Spacer>
      <MonthChart />
    </PageBody>
  );
}

export default Stats;
