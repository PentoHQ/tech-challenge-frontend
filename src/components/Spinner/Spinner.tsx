import { CircularProgress } from '@material-ui/core'
import React from 'react'
import styles from './Spinner.module.scss'

export interface SpinnerProps {
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
   * Optional click handler
   */
  onClick?: () => void
  /**
   * How large should the spinner be?
   */
  size?: number | string
}

/**
 * Primary UI component for user interaction
 */
export const Spinner = ({
  color = 'primary',
  className = '',
  backgroundColor,
  size = 40,
  ...props
}: SpinnerProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      <CircularProgress size={size} style={{ margin: 'auto' }} />
    </div>
  )
}

export default Spinner
