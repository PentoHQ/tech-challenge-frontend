import React from 'react'
import styles from './SectionHeader.module.scss'

export interface SectionHeaderProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the sectionheader be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * What background color to use
   */
  subHeader?: string
  /**
   * SectionHeader contents
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
}

/**
 * Primary UI component for user interaction
 */
export const SectionHeader = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  children,
  subHeader,
  ...props
}: SectionHeaderProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      <span className={styles.mainLabel}>{children}</span>
      {subHeader ? <span className={styles.subLabel}>{subHeader}</span> : null}
    </div>
  )
}

export default SectionHeader
