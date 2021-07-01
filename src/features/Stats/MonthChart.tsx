import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useMonthChartData } from './useMonthChartData'
import Loader from '../../components/Loader'

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function MonthChart() {
  const { names, sessions, error, loading } = useMonthChartData()
  if (loading) return <Loader />
  if (error) return <div>{error.toString()}</div>
  return (
    <Chart formatter={msToHoursMinutes} sessions={sessions as any} names={names} title="Month" />
  )
}
