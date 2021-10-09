import Loading from 'src/components/Loading'
import { msToHoursMinutes } from 'src/util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useMonthChartData } from './useMonthChartData'

/**
 * @typedef {import('rootReducer').RootState} State
 */

const MonthChart = (): JSX.Element => {
  const { names, sessions, loading } = useMonthChartData()

  if (loading) {
    return <Loading />
  }

  return (
    <Chart formatter={msToHoursMinutes} sessions={sessions as any} names={names} title="Month" />
  )
}

export default MonthChart
