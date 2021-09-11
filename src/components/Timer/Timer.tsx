import { useState, useEffect } from 'react'
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
  children: React.ReactNode
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
   * Provides the start for the duration calculation
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
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  const [{ days, hours, minutes, seconds }, setElapsedTime] = useState(
    intervalToDuration({ start: startDate, end: Date.now() }),
  )

  useEffect(() => {
    let timer = setInterval(() => {
      setElapsedTime(intervalToDuration({ start: startDate, end: Date.now() }))
    }, 1000)
    return () => clearInterval(timer)
  }, [startDate])

  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      {!!days && `${days} day${days === 1 ? ', ' : 's, '}`}
      {hours?.toString().padStart(2, '0')}:{minutes?.toString().padStart(2, '0')}:
      {seconds?.toString().padStart(2, '0')}
      {children}
    </div>
  )
}

export default Timer
