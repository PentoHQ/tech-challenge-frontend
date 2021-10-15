import { format } from 'date-fns/fp'
import { useSessionsQueryQuery } from '../../../generated/graphql'
import { Session } from '../../../types'
import { diffDateStrings } from '../../../util/diffDateStrings'

const formatDayOfYear = format('Do')

type DayData = { [name: string]: number }
type SessionsByDays = { [date: string]: DayData }
type accumulator = { names: Set<string>; sessionsByDays: SessionsByDays }

function groupSessionsByDays(sessions: Session[]) {
  const initial: accumulator = { names: new Set(), sessionsByDays: {} }
  const reduced = sessions.reduce(({ names, sessionsByDays }, { startDate, endDate, name }) => {
    // get the day of the week formatted (eg. Mon, Tue...)
    const dateStr = formatDayOfYear(new Date(startDate))
    names.add(name)
    // define the day data if not exists already (eg.  { Mon: 0, startDate: Mon })
    const dayData = sessionsByDays[dateStr] || { [name]: 0, startDate: dateStr }
    // define the duration
    const duration = diffDateStrings(startDate, endDate)

    return {
      names,
      sessionsByDays: {
        ...sessionsByDays,
        [dateStr]: {
          ...dayData,
          [name]: (dayData[name] || 0) + duration,
        },
      },
    }
  }, initial)
  return { names: Array.from(reduced.names), sessions: Object.values(reduced.sessionsByDays) }
}

export function useDayChartData() {
  const { data, loading, error } = useSessionsQueryQuery()
  // We need to type this data or TS will infer it as names: string[] | never[]
  const defaultData: { names: string[]; sessions: DayData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }
  return { ...groupSessionsByDays(data.sessions), error, loading }
}
