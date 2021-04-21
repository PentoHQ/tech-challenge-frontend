// This are the sessions already done
export type Session = {
  name: string
  /**
   * Iso date format
   */
  startDate: string
  /**
   * Iso date format
   */
  endDate: string
  id: string
}
export interface SessionGroup {
  name: string
  total: number
  lastRun: string
  sessions: Session[]
}
