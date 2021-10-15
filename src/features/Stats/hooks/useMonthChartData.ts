import { format } from 'date-fns/fp'
import { useSessionsQueryQuery } from '../../../generated/graphql'
import { Session } from '../../../types'
import { diffDateStrings } from '../../../util/diffDateStrings'

const formatMonth = format('Lo')

type MonthData = { [name: string]: number }
type SessionsByMonth = { [date: string]: MonthData }
type accumulator = { names: Set<string>; sessionsByMonth: SessionsByMonth }

function groupSessionsByMonth(sessions: Session[]) {
  const initial: accumulator = { names: new Set(), sessionsByMonth: {} }
  const { names, sessionsByMonth } = sessions.reduce(
    ({ names, sessionsByMonth }, { startDate, endDate, name }) => {
      const dateStr = formatMonth(new Date(startDate))
      names.add(name)
      const dayData = sessionsByMonth[dateStr] || { [name]: 0, startDate: dateStr }
      const duration = diffDateStrings(startDate, endDate)

      return {
        names,
        sessionsByMonth: {
          ...sessionsByMonth,
          [dateStr]: {
            ...dayData,
            [name]: (dayData[name] || 0) + duration,
          },
        },
      }
    },
    initial,
  )
  return { names: Array.from(names), sessions: Object.values(sessionsByMonth) }
}

export function useMonthChartData() {
  const { data, loading, error } = useSessionsQueryQuery()
  // We need to type this data or TS will infer it as names: string[] | never[]
  const defaultData: { names: string[]; sessions: MonthData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }
  return { ...groupSessionsByMonth(data.sessions), error, loading }
}
