import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useWeekChartData } from './useWeekChartData'

export default function WeekChart() {
  const { sessions, names, error, loading } = useWeekChartData()

  if (error) {
    return <div>{error.toString()}</div>
  }

  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={sessions as any}
      xLabel="Days"
      xDataKey="weekday"
      names={names}
      title="Week"
      isLoading={loading}
    />
  )
}
