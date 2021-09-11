import React from 'react'
import styles from './ListSkeleton.module.scss'
import Skeleton from '@material-ui/lab/Skeleton'

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
export const ListSkeleton = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  ...props
}: ListSkeletonProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <li className={classes} style={{ backgroundColor }} {...props}>
      <div>
        <Skeleton animation="wave" height={25} width={40 + Math.random() * 90} />
        <Skeleton animation="wave" height={17} width={80 + Math.random() * 90} />
      </div>
      <div>
        <Skeleton animation="wave" variant="circle" width={30} height={30} />
      </div>
    </li>
  )
}

export default ListSkeleton
