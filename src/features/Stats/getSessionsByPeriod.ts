import { Session } from '../../types'
import { startOfWeek, endOfWeek } from 'date-fns'

export const getSessionsByPeriod = (sessions: Session[]) => {
  const now = new Date()
  const from = startOfWeek(now)
  const to = endOfWeek(now)

  const filteredSessions = sessions.filter(
    (session) => new Date(session.startDate) >= from && new Date(session.endDate) <= to,
  )
}
