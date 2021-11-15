import { useOutsideClick } from 'rooks'
import React, {
  ChangeEventHandler,
  ReactChild,
  useState,
  useRef,
  KeyboardEventHandler,
} from 'react'
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
  id: string
  onSubmit?: (id: string, title: string) => void
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
  id,
  onSubmit,
  ...props
}: ListItemProps) => {
  const classes = [
    styles.wrapper,
    dense ? styles.dense : '',
    disabled ? styles.disabled : '',
    disableGutters ? '' : styles.gutters,
    className,
  ]
    .join(' ')
    .trim()
  const ref = useRef<HTMLInputElement>(null)
  const [edited, setEdited] = useState(false)
  const [value, setValue] = useState(title)

  const handleDblClick = () => {
    setEdited(true)
    setValue(title)
  }

  const handleChqange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleOutsideClick = () => {
    if (edited) {
      setEdited(false)
    }
  }
  useOutsideClick(ref, handleOutsideClick)

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Escape') {
      setValue(title)
      setEdited(false)
    }

    if (e.key === 'Enter') {
      !!onSubmit && onSubmit(id, value)
      setEdited(false)
    }
  }

  return (
    <li className={classes} {...props} onDoubleClick={handleDblClick}>
      <div className={styles.text}>
        {edited ? (
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={handleChqange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div className={styles.title}>{value}</div>
        )}
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </li>
  )
}

export default ListItem
