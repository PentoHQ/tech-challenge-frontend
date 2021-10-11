import clsx from 'clsx'
import { ReactElement, cloneElement, ReactNode } from 'react'
import styles from './Card.module.scss'

type BackgroundColor = 'default' | 'grey'
type Props = {
  className?: string
  footer?: ReactElement<{ className?: string }>
  children: ReactNode
  bgColor: BackgroundColor
}

function Card({ className, children, footer, bgColor }: Props) {
  const classes = clsx(styles.wrapper, { [styles.greyBg]: bgColor === 'grey' }, className)

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
  const classes = clsx(styles.content, { [styles.compact]: compact }, className)
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
  const classes = clsx(styles.header, { [styles.compact]: compact }, className)
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
  const classes = clsx(
    styles.wrapper,
    styles.rawCard,
    { [styles.greyBg]: bgColor === 'grey' },
    className,
  )
  return <div className={classes}>{children}</div>
}

RawCard.defaultProps = {
  className: '',
  bgColor: 'default',
}

export function CardDivider({ className = '' }: { className?: string }) {
  const classes = clsx(styles.divider, className)
  return <div className={classes}></div>
}

CardDivider.defaultProps = { className: '' }
