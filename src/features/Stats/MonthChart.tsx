import Spinner from 'components/Spinner'
import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useMonthChartData } from './useMonthChartData'

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function MonthChart() {
  const { names, sessions, error, loading } = useMonthChartData()
  if (loading) return <Spinner size={'10rem'} />
  if (error) return <div>{error.toString()}</div>
  return (
    <Chart formatter={msToHoursMinutes} sessions={sessions as any} names={names} title="Month" />
  )
}
