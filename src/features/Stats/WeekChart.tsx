import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useWeekChartData } from './hooks/useWeekChartData'

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function WeekChart() {
  const { names, sessions, error, loading } = useWeekChartData()
  if (loading) return <div>Loading</div>
  if (error) return <div>{error.toString()}</div>

  return (
    <Chart formatter={msToHoursMinutes} sessions={sessions as any} names={names} title="Week" />
  )
}
