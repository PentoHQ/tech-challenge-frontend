import { msToHoursMinutes } from '../../../../utils/formatters/minsToHoursMinutes';
import Chart from '../Chart';
import { useMonthChartData } from '../../../../hooks';

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function MonthChart() {
  const { names, sessions, error, loading } = useMonthChartData();
  if (loading) return <div>Loading</div>;
  if (error) return <div>{error.toString()}</div>;
  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={sessions as any}
      names={names}
      title="Month"
    />
  );
}
