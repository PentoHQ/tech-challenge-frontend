import { motion, Target } from 'framer-motion'
import React, { MouseEvent } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger'
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  children: React.ReactNode
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Optional click handler
   */
  onClick?: (e: MouseEvent) => void
  whileTap?: Target
  disabled?: boolean
  title?: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = 'primary',
  size = 'medium',
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const classes = [
    styles.wrapper,
    styles[color],
    styles[size],
    disabled ? styles.disabled : '',
    className,
  ]
    .join(' ')
    .trim()
  return (
    <motion.button type="button" className={classes} disabled={disabled} {...props}>
      {children}
    </motion.button>
  )
}

export default Button
