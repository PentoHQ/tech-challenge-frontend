---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.tsx
---
import React from 'react'
import styles from './<%= h.capitalize(name) %>.module.scss'

export interface <%= h.capitalize(name) %>Props {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the <%= name.toLowerCase() %> be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * <%= h.capitalize(name) %> contents
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
export const <%= h.capitalize(name) %> = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  children,
  ...props
}: <%= h.capitalize(name) %>Props) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      {children}
    </div>
  )
}

export default <%= h.capitalize(name) %>
