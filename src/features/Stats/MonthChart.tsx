import { BarLoader } from 'components/BarLoader'
import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useMonthChartData } from './useMonthChartData'

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function MonthChart() {
  const { names, sessions, error, loading } = useMonthChartData()
  if (loading) return <BarLoader />
  if (error) return <div>{error.toString()}</div>
  return (
    <Chart formatter={msToHoursMinutes} sessions={sessions as any} names={names} title="Month" />
  )
}
