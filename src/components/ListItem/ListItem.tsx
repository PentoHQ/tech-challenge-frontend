import { MouseEventHandler, ReactChild, useState, useCallback } from 'react'
import styles from './ListItem.module.scss'
import { useUpdateSession } from '../../features/SessionsList/hooks'
import InputText from '../InputText'

export interface ListItemProps {
  id: number
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
  onClick?: MouseEventHandler<HTMLElement>
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
  onClick,
  id,
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

  const [editMode, setEditMode] = useState(false)
  const [name, setName] = useState(title)
  const { updateSession, loading } = useUpdateSession()

  const resetInput = useCallback(() => {
    if (loading) {
      return
    }
    setName(title)
    setEditMode(false)
  }, [title, loading])

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        resetInput()
      }
    },
    [resetInput],
  )

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      await updateSession(id, name)
      setEditMode(false)
    },
    [id, name, updateSession],
  )

  return (
    <li className={classes} {...props}>
      <div className={styles.text} onClick={() => setEditMode(true)}>
        {editMode ? (
          <form onSubmit={onSubmit}>
            <InputText
              value={name}
              autoFocus
              onKeyDown={onKeyDown}
              onChange={(value) => setName(value)}
              onBlur={resetInput}
            />
          </form>
        ) : (
          <>
            <div className={styles.title}>{name}</div>
            <div className={styles.subtitle}>{subtitle}</div>
          </>
        )}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </li>
  )
}

export default ListItem
