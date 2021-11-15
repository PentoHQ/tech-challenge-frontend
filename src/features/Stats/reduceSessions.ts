import { Session } from '../../types'
import { diffDateStrings } from '../../util/diffDateStrings'

export type SessionData = { [name: string]: number }
type SessionsReduced = { [date: string]: SessionData }
type accumulator = { names: Set<string>; reduced: SessionsReduced }

export const reduceSessions = (
  sessions: Session[],
  reduceFunction: CurriedFn1<number | Date, string>,
) => {
  const initial: accumulator = { names: new Set(), reduced: {} }
  const { names, reduced } = sessions.reduce(({ names, reduced }, { startDate, endDate, name }) => {
    const dateStr = reduceFunction(new Date(startDate))
    names.add(name)
    const dayData = reduced[dateStr] || { [name]: 0, startDate: dateStr }
    const duration = diffDateStrings(startDate, endDate)

    return {
      names,
      reduced: {
        ...reduced,
        [dateStr]: {
          ...dayData,
          [name]: (dayData[name] || 0) + duration,
        },
      },
    }
  }, initial)

  return { names: Array.from(names), sessions: Object.values(reduced) }
}
