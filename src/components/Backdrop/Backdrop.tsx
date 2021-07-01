import React, { ReactChild } from 'react'
import styles from './Backdrop.module.scss'

export interface BackdropProps {
  children: React.ReactNode | ReactChild | ReactChild[]
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  opacity?: number
}

/**
 * Primary UI component for user interaction
 */
export const Backdrop = ({ children, opacity = 0.7, className, ...props }: BackdropProps) => {
  const classes = [styles.wrapper, className].join(' ').trim()
  return (
    <div
      className={classes}
      {...props}
      style={{ backgroundColor: `rgba(255,255,255, ${opacity})` }}
    >
      {children}
    </div>
  )
}

export default Backdrop
