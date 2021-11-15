import { format } from 'date-fns/fp'
import { useSessionsQueryQuery } from '../../generated/graphql'
import { Session } from '../../types'
import { reduceSessions, SessionData } from './reduceSessions'

function groupSessionsByWeek(sessions: Session[]) {
  const formatWeek = format('Io')
  return reduceSessions(sessions, formatWeek)
}

export function useMonthChartData() {
  const { data, loading, error } = useSessionsQueryQuery()
  // We need to type this data or TS will infer it as names: string[] | never[]
  const defaultData: { names: string[]; sessions: SessionData[] } = { names: [], sessions: [] }
  if (!data || loading) return { ...defaultData, error, loading }
  return { ...groupSessionsByWeek(data.sessions), error, loading }
}
