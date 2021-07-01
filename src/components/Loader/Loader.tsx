import { ReactChild } from 'react'
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
   * Optional click handler
   */
  children?: ReactChild | ReactChild[]
}

/**
 * Primary UI component for user interaction
 */
export const Loader = ({ className = '', ...props }: LoaderProps) => {
  const classes = [styles.wrapper, styles.ldsRing, className].join(' ').trim()
  return (
    <div className={classes} {...props}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Loader
