import React from 'react';
import Loading from 'components/Loading';
import useDailyData from 'hooks/useDailyData';
import { msToHoursMinutes } from 'utils/formatters/minsToHoursMinutes';
import Chart from '../Chart';

function DailySummary() {
  const { names, sessions, error, loading } = useDailyData();

  if (loading) return <Loading />;
  if (error) return <>{error.toString()}</>;
  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={sessions as any}
      names={names}
      title="Day"
    />
  );
}

export default DailySummary;
