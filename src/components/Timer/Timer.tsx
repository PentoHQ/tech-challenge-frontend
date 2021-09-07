import React, { useState } from 'react'
import { intervalToDuration } from 'date-fns'
import styles from './Timer.module.scss'
import { useEffect } from 'react'

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
   * Get the Start Date
   */
  startDate: Date
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
  const [durationData, setDurationData] = useState(
    intervalToDuration({ start: startDate, end: new Date() }),
  )
  const { hours, minutes, seconds } = durationData

  useEffect(() => {
    let intervalId: number = 0
    const calculate = () => {
      intervalId = window.setInterval(
        () => setDurationData(intervalToDuration({ start: startDate, end: new Date() })),
        1000,
      )
    }
    calculate()
    return () => clearInterval(intervalId)
  }, [startDate])

  const classes = [styles.wrapper, styles[color], className].join(' ').trim()

  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      {hours} Hr :{minutes} Min: {seconds} Sec
    </div>
  )
}

export default Timer
