import clsx from 'clsx'
import styles from './ElapsedTime.module.scss'
import { useElapsedHoursMinsSecs } from './hooks'

export interface ElapsedTimeProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Optional date from which starting count the elapsed time, default now
   */
  fromDate?: Date
}

/**
 * Primary UI component for user interaction
 */
export const ElapsedTime = ({
  color = 'primary',
  className = '',
  backgroundColor,
  fromDate = new Date(),
  ...props
}: ElapsedTimeProps) => {
  const classes = clsx(styles.wrapper, styles[color], className)
  const elapsed = useElapsedHoursMinsSecs(fromDate)

  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      {elapsed}
    </div>
  )
}

export default ElapsedTime
