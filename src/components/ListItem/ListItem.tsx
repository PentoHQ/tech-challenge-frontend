import React, { ReactChild } from 'react'
import styles from './ListItem.module.scss'

export interface ListItemProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * How large should the listitem be?
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
  onClick?: () => void
  dense?: boolean
  disabled?: boolean
  /**
   * The primary text
   */
  title: string
  subtitle: string
  /**
   * If you need to disable left-right gutters
   */
  disableGutters?: boolean

  /**
   * An additional action per row
   */
  action?: ReactChild
  /**
   * Styles for hover
   */
  interactive?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const ListItem = ({
  color = 'primary',
  size = 'medium',
  className = '',
  dense,
  disabled,
  title,
  disableGutters,
  subtitle,
  action,
  interactive,
  ...props
}: ListItemProps) => {
  const classes = [
    styles.wrapper,
    dense ? styles.dense : '',
    disabled ? styles.disabled : '',
    disableGutters ? '' : styles.gutters,
    interactive ? styles.interactive : '',
    className,
  ]
    .join(' ')
    .trim()
  return (
    <li className={classes} {...props}>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </li>
  )
}

export default ListItem
