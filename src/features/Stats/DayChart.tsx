import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useDayChartData } from './useDayChartData'

export default function DayChart() {
  const { sessions, names, error, loading } = useDayChartData()

  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={sessions as any}
      xLabel="Sessions"
      xDataKey="name"
      names={names}
      title="Today"
      isLoading={loading}
      error={error?.message}
    />
  )
}
