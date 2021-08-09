import { Children, ReactChild } from 'react'
import styles from './FormRow.module.scss'
import Button from '../Button'

type AlignY = 'center' | 'bottom' | 'top' | 'baseline'

interface Props {
  /**
   * If further customization is needed provide a custom class name,
   * it will be applied to the root of the component as the last class,
   * giving it the greatest precedence
   */
  className?: string
  /**
   * If the form fields (inputs, buttons, etc)
   * should be left or right aligned
   */
  align?: 'left' | 'right' | 'center' | 'sides'
  /**
   * If you want the items to be centered top or bottom aligned
   */
  alignY: AlignY
  /**
   * If padding needs to be suppressed.
   * For example, if this is inside a footer
   */
  compact?: boolean
  /**
   * If the child elements should fill the entire row.
   * Defaults to true
   */
  stretchChildren?: boolean
  stretchLastChild?: boolean
  /**
   * If children should take the available space but
   * distributing it evenly, forcing the width of each child
   * to be of the same size.
   * This has precedence over stretchChildren
   */
  sizeEvenly?: boolean
  children: ReactChild[] | ReactChild
  /**
   * If you need to space each item in a compact way (8px vs 24px)
   */
  childSpacing?: 'normal' | 'compact'
}
// Only exported for internal usage
export const alignYStyles: Record<AlignY, string> = {
  center: '',
  bottom: styles.bottomAlign,
  top: styles.topAlign,
  baseline: styles.baseline,
}

function FormRow({
  className,
  children,
  align,
  alignY,
  // We use this way of default to let other components inject this prop if it is
  // not defined. Adding it to default props does not allow this
  stretchChildren = true,
  stretchLastChild,
  compact,
  childSpacing,
  sizeEvenly,
}: Props) {
  const classes = [
    styles.wrapper,
    compact ? styles.compact : '',
    stretchChildren ? styles.fill : '',
    childSpacing === 'compact' ? styles.spacing1 : '',
    sizeEvenly ? styles.sizeEvenly : '',
    alignYStyles[alignY],
    stretchLastChild === false ? styles.doNotStretchLastChild : '',
    align === 'left'
      ? styles.leftAlign
      : align === 'center'
      ? styles.centered
      : align === 'sides'
      ? styles.sides
      : '',
    className,
  ]
    .join(' ')
    .trim()
  return (
    <div className={classes}>
      {Children.map(
        children,
        (child: any) =>
          child && (
            <div
              className={`${styles.formItem} ${child.type === Button ? styles.button : ''} ${
                child.props?.className
              }`}
            >
              {child}
            </div>
          ),
      )}
    </div>
  )
}

FormRow.defaultProps = {
  className: '',
  color: 'primary',
  align: 'right',
  alignY: 'baseline',
  childSpacing: 'normal',
  compact: false,
  sizeEvenly: false,
  stretchLastChild: true,
  // Don't add this
  // stretchChildren: true,
}

export default FormRow
