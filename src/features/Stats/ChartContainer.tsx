import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useMonthChartData, useTodaysChartData } from './useChartData'
import CenteredText from 'components/CenteredText'

/**
 * @typedef {import('rootReducer').RootState} State
 */

// Declaring ChartType enum here (not in common util), as we are not using this anywhere else as of now
enum ChartType {
  Month = 'Month',
  Toda = 'Today',
  Week = 'Week',
}

interface ChartContainerProps {
  title: string
}

export default function ChartContainer({ title }: ChartContainerProps) {
  const { names, sessions, error, loading } = useMonthChartData()
  const { sessions: todaysSessions } = useTodaysChartData()
  console.log('useTodaysChartData', useTodaysChartData())
  if (loading) return <CenteredText>Loading chart...</CenteredText>
  if (error) return <div>{error.toString()}</div>

  const getSessionsByType = (type: ChartType | string) => {
    switch (type) {
      case ChartType.Month:
        return sessions
      case ChartType.Week:
        return []
      default:
        return todaysSessions
    }
  }

  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={getSessionsByType(title) as any}
      names={names}
      title={title}
    />
  )
}
