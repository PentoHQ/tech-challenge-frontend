import { useEffect, useState } from 'react'
import { dateDiff } from '../../util/dateDiff'
import { msToHourMinSec } from '../../util/formatters/msToHourMinSec'

function format(hours: number | string, minutes: number | string, seconds: number | string) {
  return `${hours}:${minutes}:${seconds}`
}

function getElapsedHoursMinsSecs(startDate: Date) {
  const diff = dateDiff(startDate, new Date())
  const [hours, minutes, seconds] = msToHourMinSec(diff)
  const elapsed = format(hours, minutes, seconds)

  return elapsed
}

export function useElapsedHoursMinsSecs(startDate: Date) {
  const initialElapsed = getElapsedHoursMinsSecs(startDate)
  const [elapsed, setElapsed] = useState(initialElapsed)

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedElapsed = getElapsedHoursMinsSecs(startDate)
      setElapsed(updatedElapsed)
    }, 1000)

    return () => clearInterval(interval)
  }, [startDate])

  return elapsed
}
