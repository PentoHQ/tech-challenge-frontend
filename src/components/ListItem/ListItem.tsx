import { ReactChild, useState } from 'react'
import styles from './ListItem.module.scss'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'
import { DateTimePicker } from '@material-ui/pickers'
import { useUpdateSession } from 'features/SessionsList/hooks'

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
   * Data about individual session
   */
  sessionData?: any
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
  sessionData,
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

  const [hover, setHover] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [dateIsValid, setDateIsValid] = useState(true)
  const [name, setName] = useState(sessionData?.name)
  const [startDate, setStartDate] = useState(new Date(sessionData?.startDate))
  const [endDate, setEndDate] = useState(new Date(sessionData?.endDate))

  const { updateSession } = useUpdateSession()

  if (editMode) {
    return (
      <li className={classes} {...props} style={{ columnGap: '1rem' }}>
        <div className={styles.text}>
          <input className={styles.title} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <DateTimePicker
          value={startDate}
          onChange={(dateString) => {
            let d = new Date(`${dateString?.toISOString()}`)
            if (d > endDate) {
              setDateIsValid(false)
              setStartDate(d)
            } else {
              setDateIsValid(true)
              setStartDate(d)
            }
          }}
          label={dateIsValid ? 'Start Date' : 'Start Date cannot be later than End Date'}
          showTodayButton
          error={!dateIsValid}
        />
        <DateTimePicker
          value={endDate}
          onChange={(dateString) => setEndDate(new Date(`${dateString?.toISOString()}`))}
          label="End Date"
          showTodayButton
          error={!dateIsValid}
        />
        <IconButton
          color="primary"
          aria-label="Close session editing"
          component="span"
          onClick={() => {
            setStartDate(new Date(sessionData?.startDate))
            setEndDate(new Date(sessionData?.endDate))
            setName(sessionData?.name)
            setDateIsValid(true)
            setEditMode(false)
          }}
        >
          <ClearIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Confirm session editing"
          component="span"
          disabled={!dateIsValid}
          onClick={() => {
            dateIsValid &&
              updateSession(
                sessionData.id,
                name,
                startDate.toISOString(),
                endDate.toISOString(),
              ).then(() => setEditMode(false))
          }}
          onError={console.log}
        >
          <CheckIcon />
        </IconButton>
      </li>
    )
  } else {
    return (
      <li
        className={classes}
        {...props}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.text}>
          <div className={styles.title}>{name}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>

        {hover && (
          <IconButton
            color="primary"
            aria-label="Edit session"
            component="span"
            onClick={() => setEditMode(true)}
          >
            <EditIcon />
          </IconButton>
        )}
        {action && <div className={styles.action}>{action}</div>}
      </li>
    )
  }
}

export default ListItem
