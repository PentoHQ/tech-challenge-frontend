import { endOfWeek, startOfWeek } from 'date-fns'
import { format } from 'date-fns/fp'
import { Session } from '../../types'
import { dateDiff } from '../../util/dateDiff'
import { useGetSessionsInRange } from './hooks'

const formatDay = format('EEEE')

type SessionsByDay = {
  [weekday: string]: SessionData
}
type SessionData = {
  [name: string]: number
}

type accumulator = { names: Set<string>; sessionsByDay: SessionsByDay }

function groupSessionByDay(sessions: Session[]) {
  const initial: accumulator = { names: new Set(), sessionsByDay: {} }
  const { names, sessionsByDay } = sessions.reduce(
    ({ names, sessionsByDay }, { startDate, endDate, name }) => {
      const dateStr = formatDay(new Date(startDate))
      names.add(name)
      const dayData = sessionsByDay[dateStr] || { [name]: 0, weekday: dateStr }
      const duration = dateDiff(startDate, endDate)

      return {
        names,
        sessionsByDay: {
          ...sessionsByDay,
          [dateStr]: {
            ...dayData,
            [name]: (dayData[name] || 0) + duration,
          },
        },
      }
    },
    initial,
  )
  return { names: Array.from(names), sessions: Object.values(sessionsByDay) }
}

const formatterOptions = { weekStartsOn: 1 as const } // as const needed for typescript since it automatically infers number
export function useWeekChartData() {
  const today = new Date()
  const { data, isLoading: loading, error } = useGetSessionsInRange({
    from: startOfWeek(today, formatterOptions),
    to: endOfWeek(today, formatterOptions), // since there cannot be sessions in the future this can be omitted
  })

  const defaultData: { names: string[]; sessions: SessionData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }
  return { ...groupSessionByDay(data.sessions), error, loading }
}
