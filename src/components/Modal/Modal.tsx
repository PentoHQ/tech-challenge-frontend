import clsx from 'clsx'
import React, { ReactNode, useCallback } from 'react'
import Backdrop, { BackdropProps } from '../Backdrop'
import Text from '../Text'
import styles from './Modal.module.scss'
import Card, { CardContent, CardDivider, CardHeader } from '../Card'
import { useEventListener } from './hooks'
import Spacer from '../Spacer'

// TODO: move inside Backdrop.tsx and use that also in Spinner component
type BackdropAdditionalProps = Omit<BackdropProps, 'children'>

export type ModalCloseReason = 'click-outside' | 'esc-pressed'

export interface ModalProps {
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Modal contents
   */
  children: ReactNode
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Handles the open/close state of the modal
   */
  open?: boolean
  /**
   * Optional modal title
   */
  title?: string
  /**
   * Optional React Node to be rendered inside the footer
   * Note: the footer will be rendered only if a Node is provided
   */
  footer?: ReactNode
  /**
   * Additional props to be provided to the wrapping backdrop component
   */
  backdropProps?: BackdropAdditionalProps
  /**
   * Optional callback fired when user clicks outside the modal
   */
  onClose?: (reason: ModalCloseReason) => void
}

// TODO: Create explicit CardFooter in Card component and replace with that
interface ModalFooterProps {
  /**
   * Modal footer contents
   */
  children: React.ReactNode
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <Spacer p={1} className={styles.footer}>
      {children}
    </Spacer>
  )
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  className = '',
  backgroundColor,
  children,
  open = false,
  title,
  footer,
  backdropProps = {},
  onClose = (_) => {},
  ...props
}: ModalProps) => {
  const classes = clsx(styles.modal, className)

  const cancelOnEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose('esc-pressed')
      }
    },
    [onClose],
  )

  useEventListener('keyup', cancelOnEsc, open)

  return (
    <>
      <Backdrop show={open} onClick={() => onClose('click-outside')} {...backdropProps} />
      <Card className={classes}>
        {title && (
          <>
            <CardHeader compact={true}>
              <Text className={styles.title} variant="h3" color="primary">
                {title}
              </Text>
            </CardHeader>
            <CardDivider />
          </>
        )}
        <CardContent className={styles.content}>{children}</CardContent>
        {footer && (
          <>
            <CardDivider />
            <ModalFooter>{footer}</ModalFooter>
          </>
        )}
      </Card>
    </>
  )
}

export default Modal
