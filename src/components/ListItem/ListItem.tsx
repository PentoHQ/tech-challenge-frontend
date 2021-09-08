import React, { ReactChild, useState } from 'react'
import styles from './ListItem.module.scss'

import EditableInput from 'components/EditableInput'
import ItemLabel from 'components/ItemLabel'

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
  isEditing?: boolean
  onCancel?: () => void
  onSave?: (name: string) => void
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
  isEditing = false,
  onSave,
  onCancel,
  ...props
}: ListItemProps) => {
  const [editValue, setEditValue] = useState('')
  const classes = [
    styles.wrapper,
    dense ? styles.dense : '',
    disabled ? styles.disabled : '',
    disableGutters ? '' : styles.gutters,
    className,
  ]
    .join(' ')
    .trim()
  return (
    <li className={classes} {...props}>
      <div className={styles.text}>
        <div className={styles.title}>
          {isEditing ? (
            <EditableInput
              onChange={() => setEditValue(editValue)}
              value={title}
              onCancel={() => onCancel && onCancel()}
              onSave={() => onSave && onSave(editValue)}
            />
          ) : (
            title
          )}

          <ItemLabel>Session Name</ItemLabel>
        </div>
        <div className={styles.subtitle}>
          {subtitle}
          <ItemLabel>Duration</ItemLabel>
        </div>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </li>
  )
}

export default ListItem
