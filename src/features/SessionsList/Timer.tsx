import { intervalToDuration } from 'date-fns'
import { FC, useCallback, useEffect, useState } from 'react'

export interface TimerProps {
  startDate: Date
}

const formatNumberToLocale = (number?: number) => (number ? ('0' + number).slice(-2) : '00')

/**
 * Primary UI component for user interaction
 */
export const Timer: FC<TimerProps> = ({ startDate }) => {
  const [formattedSeconds, setSeconds] = useState('')
  const [formattedMinutes, setMinutes] = useState('')
  const [formattedHours, setHours] = useState('')

  const updateTimer = useCallback(() => {
    const { hours, minutes, seconds } = intervalToDuration({
      start: startDate,
      end: new Date(),
    })
    setSeconds(formatNumberToLocale(seconds))
    setMinutes(formatNumberToLocale(minutes))
    setHours(formatNumberToLocale(hours))
  }, [startDate])

  useEffect(() => {
    updateTimer()

    const intervalId = setInterval(updateTimer, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [updateTimer])

  return (
    <div>
      {formattedHours}:{formattedMinutes}:{formattedSeconds}
    </div>
  )
}

export default Timer
