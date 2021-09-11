import React from 'react'
import styles from './ListSkeleton.module.scss'

export interface ListSkeletonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the listskeleton be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * ListSkeleton contents
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
}

/**
 * Primary UI component for user interaction
 */
export const ListSkeleton = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  children,
  ...props
}: ListSkeletonProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      {children}
    </div>
  )
}

export default ListSkeleton
