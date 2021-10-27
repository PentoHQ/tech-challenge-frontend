import React from 'react'
import styles from './Timer.module.scss'
import { intervalToDuration } from 'date-fns'

import { useState, useEffect } from 'react'

export interface TimerProps {
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Timer start date
   */
  start: Date
}

/**
 * Primary UI component for user interaction
 */
export const Timer = ({ className = '', start = new Date(), ...props }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(intervalToDuration({ start, end: new Date() }))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(intervalToDuration({ start, end: new Date() }))
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, start])

  const classes = [styles.wrapper, className].join(' ').trim()
  return (
    <div className={classes} {...props}>
      {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </div>
  )
}

export default Timer
