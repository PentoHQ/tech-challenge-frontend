import Loading from 'components/Loading';
import { msToHoursMinutes } from 'utils/formatters/minsToHoursMinutes';
import { useMonthChartData } from 'hooks';
import Chart from '../Chart';

import styles from './MonthChart.module.scss';

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function MonthChart() {
  const { names, sessions, error, loading } = useMonthChartData();
  if (loading)
    return (
      <div className={styles.wrapper}>
        <Loading />
      </div>
    );
  if (error) return <div className={styles.wrapper}>{error.toString()}</div>;
  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={sessions as any}
      names={names}
      title="Month"
    />
  );
}
