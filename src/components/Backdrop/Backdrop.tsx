import clsx from 'clsx'
import React, { SyntheticEvent } from 'react'
import styles from './Backdrop.module.scss'

export interface BackdropProps {
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Backdrop contents
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
  onClick?: (event: SyntheticEvent) => void
  /**
   * Determine if the backdrop is visible or not
   */
  show?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Backdrop = ({
  className = '',
  show = true,
  backgroundColor,
  children,
  ...props
}: BackdropProps) => {
  const classes = clsx(
    styles.wrapper,
    {
      [styles.hidden]: !show,
    },
    className,
  )
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      {children}
    </div>
  )
}

export default Backdrop
