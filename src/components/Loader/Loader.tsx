import React from 'react'
import styles from './Loader.module.scss'

export interface LoaderProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the loader be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Loader type
   */
  type: 'spinner' | 'inline'
}

/**
 * Loader component, comes in two types:
 * spinner - spinner for larger areas
 * inline - dots for small inline loadings
 */
export const Loader = ({
  color = 'primary',
  backgroundColor,
  size = 'medium',
  className = '',
  type,
  ...props
}: LoaderProps) => {
  if (type === 'inline') {
    return <div className={styles.inlineLoader}>loading...</div>
  }

  const classes = [styles.spinnerLoader, styles[color], className].join(' ').trim()
  return (
    <div className={styles.wrapper}>
      <div className={classes} style={{ backgroundColor }} {...props} />
    </div>
  )
}

export default Loader
