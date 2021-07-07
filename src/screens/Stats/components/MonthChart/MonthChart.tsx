import Loading from 'components/Loading';
import Error from 'components/Error';
import { msToHoursMinutes } from 'utils/formatters/minsToHoursMinutes';
import { useMonthChartData } from 'hooks';
import Chart from '../Chart';

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function MonthChart() {
  const { names, sessions, error, loading } = useMonthChartData();

  if (loading) return <Loading />;
  if (error) return <Error message={error.toString()} />;
  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={sessions as any}
      names={names}
      title="Week in Year"
    />
  );
}
