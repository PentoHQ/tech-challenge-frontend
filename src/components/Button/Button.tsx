import clsx from 'clsx'
import { motion, Target } from 'framer-motion'
import React from 'react'
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
  onClick?: () => void
  whileTap?: Target
  disabled?: boolean
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
  const classes = clsx(
    styles.wrapper,
    styles[color],
    styles[size],
    { [styles.disabled]: disabled },
    className,
  )

  return (
    <motion.button type="button" className={classes} disabled={disabled} {...props}>
      {children}
    </motion.button>
  )
}

export default Button
