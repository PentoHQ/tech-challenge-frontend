import { format } from 'date-fns/fp'
import { isToday, isThisWeek } from 'date-fns'
import { useSessionsQueryQuery } from '../../generated/graphql'
import { Session } from '../../types'
import { diffDateStrings } from '../../util/diffDateStrings'

const formatWeek = format('Io')

type WeekData = { [name: string]: number }
type SessionsByWeek = { [date: string]: WeekData }
type accumulator = { names: Set<string>; sessionsByWeek: SessionsByWeek }

function groupSessionsByWeek(sessions: Session[]) {
  const initial: accumulator = { names: new Set(), sessionsByWeek: {} }
  const { names, sessionsByWeek } = sessions.reduce(
    ({ names, sessionsByWeek }, { startDate, endDate, name }) => {
      const dateStr = formatWeek(new Date(startDate))
      names.add(name)
      const dayData = sessionsByWeek[dateStr] || { [name]: 0, startDate: dateStr }
      const duration = diffDateStrings(startDate, endDate)

      return {
        names,
        sessionsByWeek: {
          ...sessionsByWeek,
          [dateStr]: {
            ...dayData,
            [name]: (dayData[name] || 0) + duration,
          },
        },
      }
    },
    initial,
  )
  return { names: Array.from(names), sessions: Object.values(sessionsByWeek) }
}

function groupTodaysSessions(sessions: Session[]) {
  const todaysData: { [K: string]: any } = {}
  const todaysSession = sessions.filter((session) => {
    /* 
      Today's sessions are the ones whose startDate is today
      We can change the logic depending on the ask
    */
    const isTodaysSession = isToday(new Date(session.startDate))
    const name = session.name
    if (isTodaysSession) {
      const duration = diffDateStrings(session.startDate, session.endDate)
      if (name in todaysData) {
        todaysData[name] = duration + todaysData[name]
      } else {
        todaysData[name] = duration
      }
    }
    return isToday(new Date(session.startDate))
  })
  return { sessions: [todaysData], totalSessions: todaysSession }
}

export function useMonthChartData() {
  const { data, loading, error } = useSessionsQueryQuery()
  // We need to type this data or TS will infer it as names: string[] | never[]
  const defaultData: { names: string[]; sessions: WeekData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }
  return { ...groupSessionsByWeek(data.sessions), error, loading }
}

export function useTodaysChartData() {
  const { data, loading, error } = useSessionsQueryQuery()
  // We need to type this data or TS will infer it as names: string[] | never[]
  const defaultData: { names: string[]; sessions: WeekData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }
  return { ...groupTodaysSessions(data.sessions), error, loading }
}
