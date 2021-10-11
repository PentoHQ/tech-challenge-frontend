import clsx from 'clsx'
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
   * How large should the spinner be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Spinner = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  ...props
}: SpinnerProps) => {
  const classes = clsx(styles.spinner, styles[color], styles[size], className)
  return <div className={classes} style={{ backgroundColor }} {...props} />
}

export default Spinner
