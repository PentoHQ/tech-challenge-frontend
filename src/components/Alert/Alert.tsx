import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import React from 'react'
import Spacer from '../Spacer'
import Text from '../Text'
import styles from './Alert.module.scss'

const sizes = {
  small: 1 as const,
  medium: 2 as const,
  large: 3 as const,
}

type Sizes = keyof typeof sizes

const icons = {
  error: ExclamationCircleIcon,
  warning: ExclamationIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
}

export interface AlertProps {
  /**
   * Kind of the alert: error, warning, info, success
   */
  kind?: 'error' | 'warning' | 'info' | 'success'
  /**
   * How large should the alert be?
   */
  size?: Sizes
  /**
   * Alert contents
   */
  text?: string
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Alert = ({
  kind = 'info',
  size = 'medium',
  className = '',
  text = '',
  ...props
}: AlertProps) => {
  const classes = clsx(styles.wrapper, styles[kind], className)

  const IconComponent = icons[kind]

  return (
    <div className={classes} {...props}>
      <Spacer className={styles.textContainer} pt={sizes[size]} pb={sizes[size]} pl={2} pr={2}>
        <IconComponent className={styles.icon} />
        <Text inline={true}>{text}</Text>
      </Spacer>
    </div>
  )
}

export default Alert
