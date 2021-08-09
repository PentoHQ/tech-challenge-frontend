import React from 'react'
import styles from './Header.module.scss'
import logo from './../../logo.svg'

export interface HeaderProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
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
export const Header = ({
  color = 'primary',
  className = '',
  backgroundColor,
  ...props
}: HeaderProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <header className={classes} style={{ backgroundColor }} {...props}>
      <img src={logo} className={styles.logo} alt="logo" />
    </header>
  )
}

export default Header
