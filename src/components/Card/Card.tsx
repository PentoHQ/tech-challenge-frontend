//@flow
import { ReactElement, cloneElement, ReactNode } from 'react'
import styles from './Card.module.scss'

type BackgroundColor = 'default' | 'grey'
export type CardProps = {
  className?: string
  footer?: ReactElement<{ className?: string }>
  children: ReactNode
  bgColor: BackgroundColor
}

function Card({ className, children, footer, bgColor }: CardProps) {
  const classes = [styles.wrapper, bgColor === 'grey' ? styles.greyBg : '', className].join(' ')
  if (footer && footer.props) {
    const footerClasses = footer.props.className || ''
    footer = cloneElement(footer, {
      className: `${footerClasses} ${styles.footer}`,
    })
  }
  return (
    <div className={classes}>
      {children}
      {footer}
    </div>
  )
}

Card.defaultProps = {
  className: '',
  bgColor: 'default',
}

export default Card

type ContentProps = {
  className?: string
  children: ReactNode
  compact?: boolean
}

export function CardContent({ className, children, compact }: ContentProps) {
  const classes = [styles.content, compact ? styles.compact : '', className].join(' ').trim()
  return <div className={classes}>{children}</div>
}

CardContent.defaultProps = {
  compact: false,
}
type HeaderProps = {
  className: string
  children: ReactNode
  compact: boolean
}

export function CardHeader({ className, children, compact }: HeaderProps) {
  const classes = [styles.header, compact ? styles.compact : '', className].join(' ').trim()
  return <div className={classes}>{children}</div>
}

CardHeader.defaultProps = {
  className: '',
  compact: false,
}

type RawProps = {
  className?: string
  children: ReactNode
  bgColor: BackgroundColor
}
export function RawCard({ className, bgColor, children }: RawProps) {
  const classes = [
    styles.wrapper,
    styles.rawCard,
    bgColor === 'grey' ? styles.greyBg : '',

    className,
  ].join(' ')
  return <div className={classes}>{children}</div>
}

RawCard.defaultProps = {
  className: '',
  bgColor: 'default',
}

export function CardDivider({ className = '' }: { className?: string }) {
  const classes = [styles.divider, className].join(' ')
  return <div className={classes}></div>
}

CardDivider.defaultProps = { className: '' }
