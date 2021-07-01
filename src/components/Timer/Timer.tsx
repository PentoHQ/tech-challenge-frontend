import { intervalToDuration } from 'date-fns'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './Timer.module.scss'

export interface TimerProps {
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  startDate: Date
}

/**
 * Primary UI component for user interaction
 */
export const Timer = ({ className = '', startDate, ...props }: TimerProps) => {
  const classes = [styles.wrapper, className].join(' ').trim()
  const [currentDate, setCurrentDate] = useState(startDate)
  const { hours, minutes, seconds } = intervalToDuration({ start: startDate, end: currentDate })

  const formattedInterval = [hours, minutes, seconds]
    .map((t) => t?.toString().padStart(2, '0'))
    .join(':')

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [startDate])

  return (
    <div className={classes} {...props}>
      {formattedInterval}
    </div>
  )
}

export default Timer
