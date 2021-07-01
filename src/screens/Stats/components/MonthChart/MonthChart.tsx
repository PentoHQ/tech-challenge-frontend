import { useMonthChartData } from 'hooks/useMonthChartData';
import { msToHoursMinutes } from 'util/formatters/minsToHoursMinutes';
import Chart from '../Chart';

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
