import React from 'react'
import { XIcon, CheckIcon } from '@heroicons/react/outline'
import IconButton from '../IconButton'
import styles from './EditableInput.module.scss'

export interface EditableInputProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the editableinput be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * EditableInput contents
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
  type?: 'text'
  onChange: (val: string) => any
  onCancel: () => any
  onSave: (val: string) => any
  value: string
}

/**
 * Primary UI component for user interaction
 */
export const EditableInput = ({
  color = 'primary',
  size = 'medium',
  className = '',
  type = 'text',
  backgroundColor,
  children,
  value,
  onChange,
  onCancel,
  onSave,
  ...props
}: EditableInputProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      <input {...props} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      <div className={styles.input_actions}>
        <IconButton color="primary" size="small" onClick={onCancel}>
          <XIcon></XIcon>
        </IconButton>
        &nbsp;
        <IconButton color="primary" size="small" onClick={() => onSave(value)}>
          <CheckIcon></CheckIcon>
        </IconButton>
      </div>
    </div>
  )
}

export default EditableInput
