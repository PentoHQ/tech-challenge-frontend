import clsx from 'clsx'
import Backdrop, { BackdropProps } from 'components/Backdrop'
import React from 'react'
import styles from './Spinner.module.scss'

type BackdropAdditionalProps = Omit<BackdropProps, 'children'>

export interface SpinnerProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the spinner be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Flag to render the spinner inside a backdrop component to block
   * the interactions with the underlying UI
   */
  withBackdrop?: boolean
  /**
   * Additional props to be provided to the wrapping backdrop component
   */
  backdropProps?: BackdropAdditionalProps
}

/**
 * Primary UI component for user interaction
 */
export const Spinner = ({
  color = 'primary',
  size = 'medium',
  className = '',
  withBackdrop = false,
  backdropProps = {},
  backgroundColor,
  ...props
}: SpinnerProps) => {
  const classes = clsx(styles.spinner, styles[color], styles[size], className)

  const spinner = <div className={classes} style={{ backgroundColor }} {...props} />
  return withBackdrop ? <Backdrop {...backdropProps}>{spinner}</Backdrop> : spinner
}

export default Spinner
