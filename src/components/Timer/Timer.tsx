import React, { useEffect, useState } from 'react'
import { msToHourMinSec } from 'util/formatters/msToHourMinSec'
import styles from './Timer.module.scss'

export interface TimerProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the timer be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Timer contents
   */
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Optional click handler
   */
  onClick?: () => void

  start: Date
}

/**
 * Primary UI component for user interaction
 */
export const Timer = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  start,
  ...props
}: TimerProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()

  const currentDate = new Date()
  const secondsBetweenDates = Math.round((currentDate.getTime() - start.getTime()) / 1000)

  const [time, setTime] = useState(secondsBetweenDates ?? 0)

  useEffect(() => {
    const timerId = setInterval(() => setTime((time) => time + 1), 1000)

    return () => clearInterval(timerId)
  }, [])

  const [hours, minutes, seconds] = msToHourMinSec(time * 1000)

  return (
    <div className={classes} style={{ backgroundColor }} {...props} data-testid="session-timer">
      {`${hours}:${minutes}:${seconds}`}
    </div>
  )
}
