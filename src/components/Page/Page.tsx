import clsx from 'clsx'
import { ReactChild } from 'react'
import styles from './Page.module.scss'

export interface PageProps {
  /**
   * Page contents
   */
  children: ReactChild | ReactChild[]
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Page = ({ className = '', children, ...props }: PageProps) => {
  const classes = clsx(styles.wrapper, className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Page

export function PageBody({ children }: PageProps) {
  return <div className={styles.pageBody}>{children}</div>
}
