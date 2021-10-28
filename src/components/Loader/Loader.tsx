import React from 'react'
import styles from './Loader.module.scss'

export interface LoaderProps {
  /**
   * How large should the loader be?
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
export const Loader = ({ size, className = '', ...props }: LoaderProps) => {
  const classes = [styles.wrapper, size ? styles[size] : '', className].join(' ').trim()
  return (
    <div className={classes} {...props}>
      <span className={styles.text}>Processing</span>
    </div>
  )
}

export default Loader
