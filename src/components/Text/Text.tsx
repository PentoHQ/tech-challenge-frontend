import { ReactChild } from 'react'
import styles from './Text.module.scss'
import type { TextColor } from './textColorTypes'

/**
 * This provides way better type hints than using $Keys
 */
export type TextVariant =
  | 'title'
  | 'h2'
  | 'h2Regular'
  | 'h3'
  | 'body'
  | 'text12Medium'
  | 'text14Regular'
  | 'text14Medium'
  | 'interface14Medium'
  | 'interface14Regular'
  | 'interface14Number'
  | 'interface14NumberMedium'
  | 'text16Regular'
  | 'text16Medium'

export type TextProps = {
  /**
   * If further customization is needed provide a custom class name,
   * it will be applied to the root of the component as the last class,
   * giving it the greatest precedence
   */
  className?: string
  children: ReactChild | ReactChild[]
  variant: TextVariant
  /**
   * In case you need to override the color of the variant this are the supported colors
   */
  color?: TextColor
  /**
   * By default the text wrapper has display flex, but if we want to make it inline
   * just set this to true
   */
  inline?: boolean
  /**
   * Adds a line through the texts
   */
  strikethrough?: boolean
  /**
   * New line characters will be preserved, instead of truncated (default HTML behaviour)
   */
  preservesLines?: boolean
}

/**
 * It is important this fails early, so we catch this on dev
 * @param {TextVariant} variant
 */
const matchVariant = (variant: TextVariant) => {
  const styleVariant = styles[variant]
  if (!styleVariant) throw new Error('Provided an invalid text variant: ' + variant)
  return styleVariant
}

function Text({
  className,
  children,
  variant,
  inline,
  color,
  strikethrough,
  preservesLines,
}: TextProps) {
  const classes = [
    styles.wrapper,
    matchVariant(variant),
    // Color matches 100% the styles because they are generated automatically
    color ? styles[color] : '',
    inline ? '' : styles.flex,
    strikethrough ? styles.strikethrough : '',
    preservesLines ? styles.preservesLines : '',
    className,
  ]
    .join(' ')
    .trim()
  return <span className={classes}>{children}</span>
}

Text.defaultProps = {
  className: '',
  variant: 'text14Regular',
  inline: false,
  strikethrough: false,
  preservesLines: false,
}

export default Text
