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
  start?: Date
  /**
   * Ability to stop timer
   */
  isStopped?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Timer = ({ className = '', start = new Date(), isStopped, ...props }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(intervalToDuration({ start, end: new Date() }))

  useEffect(() => {
    let timer: any

    if (!isStopped) {
      timer = setTimeout(() => {
        setTimeLeft(intervalToDuration({ start, end: new Date() }))
      }, 1000)
    } else {
      clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [timeLeft, start, isStopped])

  const classes = [styles.wrapper, className].join(' ').trim()
  return (
    <div className={classes} {...props}>
      {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </div>
  )
}

export default Timer
