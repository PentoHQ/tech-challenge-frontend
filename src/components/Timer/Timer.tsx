import React, { useState, useEffect } from 'react'
import styles from './Timer.module.scss'
import { intervalToDuration } from 'date-fns'

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
  children?: React.ReactNode
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Timer: Start date (Date function used to handle time)
   */
  startDate: Date
}

/**
 * Primary UI component for user interaction
 */
export const Timer = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  children,
  startDate,
  ...props
}: TimerProps) => {
  const [projectDuration, setProjectDuration] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const interval = setInterval(() => {
      const { hours = 0, minutes = 0, seconds = 0 } = intervalToDuration({
        start: startDate,
        end: new Date(),
      })
      setProjectDuration(Object.assign({}, { hours, minutes, seconds }))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [projectDuration, startDate])
  const { hours, minutes, seconds } = projectDuration
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      <div>Duration: {`${hours}:${minutes}:${seconds}`}</div>
    </div>
  )
}

export default Timer
