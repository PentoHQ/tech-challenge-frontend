import { PageBody } from '../../components/Page';
import Spacer from '../../components/Spacer';
import MonthChart from './components/MonthChart';

export default function StatsPage(props: any) {
  return (
    <PageBody>
      <Spacer mb={4}></Spacer>
      <MonthChart />
    </PageBody>
  );
}
