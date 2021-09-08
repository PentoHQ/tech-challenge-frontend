import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import Chart from './Chart'
import { useMonthChartData, useTodaysChartData, useWeeksChartData } from './useChartData'
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
  const { sessions: weeksSessions } = useWeeksChartData()
  if (loading) return <CenteredText>Loading chart...</CenteredText>
  if (error) return <div>{error.toString()}</div>

  const getSessionsByType = (type: ChartType | string) => {
    switch (type) {
      case ChartType.Month:
        return sessions
      case ChartType.Week:
        return weeksSessions
      default:
        return todaysSessions
    }
  }

  const getSessionNamesByType = (type: ChartType | string) => {
    switch (type) {
      case ChartType.Month:
        return names
      case ChartType.Week:
        return Object.keys(weeksSessions[0] || [])
      default:
        return Object.keys(todaysSessions[0] || [])
    }
  }

  return (
    <Chart
      formatter={msToHoursMinutes}
      sessions={getSessionsByType(title) as any}
      names={getSessionNamesByType(title)}
      title={title}
    />
  )
}
