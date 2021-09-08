import { msToHoursMinutes } from '../../util/formatters/minsToHoursMinutes'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import Chart from './Chart'
import { useMonthChartData, useTodaysChartData, useWeeksChartData } from './useChartData'
import CenteredText from 'components/CenteredText'
import SectionHeader from 'components/SectionHeader'
import Spacer from 'components/Spacer'

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

  const sessionsToShow = getSessionsByType(title || '')
  const sessionsDurations = Object.values(sessionsToShow[0] || {})

  // here checking for typeof, because startDate is getting passed with all sessions for months data
  const timeSpent = sessionsDurations.reduce(
    (total, value) => total + (typeof value === 'number' ? value : 0),
    0,
  )

  return (
    <>
      <SectionHeader subHeader={`Total Time Spent [ around ${msToHuman(timeSpent)} ]`}>
        {/*  here checking for title === ChartType.Month, 
        because startDate is getting passed with all sessions for months data */}
        Total Sessions {`(${sessionsDurations?.length - (title === ChartType.Month ? 1 : 0)})`}
      </SectionHeader>
      <Spacer pb={2} />

      <SectionHeader>Graphical representation of Sessions</SectionHeader>
      <Chart
        formatter={msToHoursMinutes}
        sessions={sessionsToShow as any}
        names={getSessionNamesByType(title)}
        title={title}
      />
    </>
  )
}
