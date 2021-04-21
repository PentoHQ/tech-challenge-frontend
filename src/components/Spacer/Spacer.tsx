//@flow
import { ReactChild } from 'react'
import styles from './Spacer.module.scss'

export type SpacerSize = 1 | 2 | 3 | 4 | 5 | 6

type Props = {
  /**
   * Margin all around (8px grid)
   */
  m?: SpacerSize
  /**
   * Margin top sizes (8px grid)
   */
  mt?: SpacerSize
  /**
   * Margin bottom sizes (8px grid)
   */
  mb?: SpacerSize
  /**
   * Margin right sizes (8px grid)
   */
  mr?: SpacerSize
  /**
   * Margin left sizes (8px grid)
   */
  ml?: SpacerSize
  /**
   * Padding all around (8px grid)
   */
  p?: SpacerSize
  /**
   * padding top (8px grid)
   */
  pt?: SpacerSize
  /**
   * padding bottom (8px grid)
   */
  pb?: SpacerSize
  /**
   * padding right (8px grid)
   */
  pr?: SpacerSize
  /**
   * padding left (8px grid)
   */
  pl?: SpacerSize
  children?: ReactChild
  className: string
}

/**
 * Spacer is a component meant for layout requirements
 * but still adhering to the the 8px grid that spring uses.
 * If you need anything more than basic spacing, do not use this component
 */
function Spacer({ m, mr, ml, mt, mb, p, pt, pb, pr, pl, children, className }: Props) {
  const classes = [
    mr ? styles[`mr${mr}`] : '',
    ml ? styles[`ml${ml}`] : '',
    mt ? styles[`mt${mt}`] : '',
    mb ? styles[`mb${mb}`] : '',
    m ? styles[`m${m}`] : '',
    p ? styles[`p${p}`] : '',
    pt ? styles[`pt${pt}`] : '',
    pb ? styles[`pb${pb}`] : '',
    pr ? styles[`pr${pr}`] : '',
    pl ? styles[`pl${pl}`] : '',
    className,
  ]
    .join(' ')
    .trim()
  return <div className={classes}>{children}</div>
}

Spacer.defaultProps = {
  className: '',
}

export default Spacer
