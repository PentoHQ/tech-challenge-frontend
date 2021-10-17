import { endOfDay, startOfDay } from 'date-fns'
import { dateDiff } from '../../util/dateDiff'
import { useGetSessionsInRange } from './hooks'

type DayData = {
  [name: string]: number
}

export function useDayChartData() {
  const today = new Date()
  const { data, isLoading: loading, error } = useGetSessionsInRange({
    from: startOfDay(today),
    to: endOfDay(today), // since there cannot be sessions in the future this can be omitted
  })

  const defaultData: { names: string[]; sessions: DayData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }

  const sessions: DayData[] = []
  const names = []
  for (const session of data.sessions) {
    const duration = dateDiff(session.startDate, session.endDate)
    sessions.push({ [session.name]: duration })
    names.push(session.name)
  }

  return { sessions, names, loading, error }
}
