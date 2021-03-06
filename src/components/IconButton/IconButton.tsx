import Button, { ButtonProps } from '../Button'
import styles from './IconButton.module.scss'
import { motion } from 'framer-motion'
import { ReactChild } from 'react'

export interface IconButtonProps extends Partial<ButtonProps> {
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  children: ReactChild
}

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
  size = 'medium',
  color,
  className = '',
  children,
  ...props
}: IconButtonProps) => {
  const classes = [styles.iconBtn, styles[size], className].join(' ').trim()
  return (
    <motion.div>
      <Button className={classes} color={color} {...props} whileTap={{ scale: 0.8 }}>
        {children}
      </Button>
    </motion.div>
  )
}

export default IconButton
