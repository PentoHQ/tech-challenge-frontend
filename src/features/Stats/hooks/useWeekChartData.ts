import { format } from 'date-fns/fp'
import { useSessionsQueryQuery } from '../../../generated/graphql'
import { Session } from '../../../types'
import { diffDateStrings } from '../../../util/diffDateStrings'

const formatWeekOfYear = format('Io')

type WeekData = { [name: string]: number }
type SessionsByWeek = { [date: string]: WeekData }
type accumulator = { names: Set<string>; sessionsByWeek: SessionsByWeek }

function groupSessionsByWeek(sessions: Session[]) {
  const initial: accumulator = { names: new Set(), sessionsByWeek: {} }
  const reduced = sessions.reduce(({ names, sessionsByWeek }, { startDate, endDate, name }) => {
    // get the day of the week formatted (eg. Mon, Tue...)
    const dateStr = formatWeekOfYear(new Date(startDate))
    names.add(name)
    // define the day data if not exists already (eg.  { Mon: 0, startDate: Mon })
    const dayData = sessionsByWeek[dateStr] || { [name]: 0, startDate: dateStr }
    // define the duration
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
  }, initial)
  return { names: Array.from(reduced.names), sessions: Object.values(reduced.sessionsByWeek) }
}

export function useWeekChartData() {
  const { data, loading, error } = useSessionsQueryQuery()
  // We need to type this data or TS will infer it as names: string[] | never[]
  const defaultData: { names: string[]; sessions: WeekData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }
  return { ...groupSessionsByWeek(data.sessions), error, loading }
}
