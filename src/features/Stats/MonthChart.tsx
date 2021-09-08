import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useMonthChartData, useTodaysChartData } from './useMonthChartData'
import CenteredText from 'components/CenteredText'

/**
 * @typedef {import('rootReducer').RootState} State
 */

export default function MonthChart() {
  const { names, sessions, error, loading } = useMonthChartData()
  const { sessions: todaysSessions } = useTodaysChartData()
  console.log('useTodaysChartData', useTodaysChartData())
  if (loading) return <CenteredText>Loading chart...</CenteredText>
  if (error) return <div>{error.toString()}</div>
  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={todaysSessions as any}
      names={names}
      title="Month"
    />
  )
}
