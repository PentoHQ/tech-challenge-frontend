import qs from 'query-string';
import { useLocation } from 'react-router-dom';

import Spacer from 'components/Spacer';
import { PageBody } from 'components/Page';
import MonthChart from './components/MonthChart';
import StatsControl from './components/StatsControl';
import DailySummary from './components/DailySummary';

export default function StatsPage() {
  const location = useLocation();
  const { type } = qs.parse(location.search);

  return (
    <PageBody>
      <Spacer pb={4}>
        <StatsControl />
      </Spacer>
      {type === 'daily' ? (
        <DailySummary />
      ) : type === 'weekly' ? (
        <span>Weekly</span>
      ) : (
        <MonthChart />
      )}
    </PageBody>
  );
}
