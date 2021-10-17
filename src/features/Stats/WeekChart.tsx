import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useWeekChartData } from './useWeekChartData'

export default function WeekChart() {
  const { sessions, names, error, loading } = useWeekChartData()

  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={sessions as any}
      xLabel="Days"
      xDataKey="weekday"
      names={names}
      title="Week"
      isLoading={loading}
      error={error?.message}
    />
  )
}
