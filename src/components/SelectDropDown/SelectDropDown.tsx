import React from 'react'
import styles from './SelectDropDown.module.scss'

export interface SelectDropDownProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the selectdropdown be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * SelectDropDown contents
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
  onChange: (value: string) => void
  label: string
}

/**
 * Primary UI component for user interaction
 */
export const SelectDropDown = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  children,
  label,
  onChange,
  ...props
}: SelectDropDownProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      <label>{label}</label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="Today">Today</option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
      </select>
    </div>
  )
}

export default SelectDropDown
