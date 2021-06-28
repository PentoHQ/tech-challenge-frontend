import React, { useState, useEffect } from 'react'
import { intervalToDuration } from 'date-fns'
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
   * Interval start time
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
  startDate,
  ...props
}: TimerProps) => {
  const [internalDate, setInternalDate] = useState(startDate)
  const [duration, setDuration] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  useEffect(() => {
    const intervalId = setInterval(() => {
    const { hours = 0, minutes = 0, seconds = 0} = intervalToDuration({ start: startDate, end: new Date() })    
    setDuration(Object.assign({}, { hours, minutes, seconds }))
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [duration])
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  const { hours, minutes, seconds } = duration
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
        <div>{`Hours: ${hours}`}</div>
        <div>{`Minutes: ${minutes}`}</div>
        <div>{`Seconds: ${seconds}`}</div>
    </div>
  )
}

export default Timer
