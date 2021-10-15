import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useDayChartData } from './hooks/useDayChartData'

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function DayChart() {
  const { names, sessions, error, loading } = useDayChartData()
  if (loading) return <div>Loading</div>
  if (error) return <div>{error.toString()}</div>

  return <Chart formatter={msToHoursMinutes} sessions={sessions as any} names={names} title="Day" />
}
