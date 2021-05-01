import React, { useState } from 'react'
import { intervalToDuration } from 'date-fns'

import { useInterval } from 'util/hooks'
import { enforceTwoDigits } from 'util/formatters/numbers'

export interface StopWatchProps {
  /**
   * starting Date object
   */
  startDate: Date
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
}

/**
 * Displays time passed
 */
export const StopWatch = ({ startDate, className = '' }: StopWatchProps) => {
  const [duration, setDuration] = useState(() =>
    intervalToDuration({
      start: startDate,
      end: new Date(),
    }),
  )

  useInterval(() => {
    const duration = intervalToDuration({ start: startDate, end: new Date() })
    setDuration(duration)
  }, 1000)

  return (
    <div className={className}>
      {enforceTwoDigits(duration.hours)}:{enforceTwoDigits(duration.minutes)}:
      {enforceTwoDigits(duration.seconds)}
    </div>
  )
}

export default StopWatch
