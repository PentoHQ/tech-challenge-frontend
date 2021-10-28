import { motion, Target } from 'framer-motion'
import React from 'react'
import styles from './Button.module.scss'

import Loader from 'components/Loader'

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
  type?: 'submit' | 'reset' | 'button'
  isLoading?: boolean
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
  type = 'button',
  isLoading,
  ...props
}: ButtonProps) => {
  const classes = [
    styles.wrapper,
    styles[color],
    styles[size],
    disabled || isLoading ? styles.disabled : '',
    className,
  ]
    .join(' ')
    .trim()
  return (
    <motion.button type={type} className={classes} disabled={disabled || isLoading} {...props}>
      {children}
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <Loader size="small" />
        </div>
      )}
    </motion.button>
  )
}

export default Button
