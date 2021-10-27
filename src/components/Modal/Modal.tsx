import React from 'react'
import styles from './Modal.module.scss'
import ReactAriaModal from 'react-aria-modal'

import Button from 'components/Button'
import Text from 'components/Text'

export interface ModalProps {
  /**
   * Modal contents
   */
  children: React.ReactNode
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Call after the user closed the modal
   */
  onClose: () => void
  /**
   * Call after the user click on Action button (for example, save data)
   */
  onAction?: () => void
  /**
   * Modal state
   */
  open: boolean
  /**
   * Button action text
   */
  actionTitle?: string
  /**
   * Button cancel text
   */
  cancelTitle?: string
  /**
   * Modal headline
   */
  headline?: string
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  className = '',
  children,
  onClose,
  onAction,
  open,
  actionTitle,
  cancelTitle,
  headline,
  ...props
}: ModalProps) => {
  const handleClose = () => onClose?.()

  const handleAction = () => onAction?.()

  const classes = [styles.wrapper, className].join(' ').trim()

  if (!open) return null

  return (
    <ReactAriaModal
      underlayClass={classes}
      titleText="demo one"
      verticallyCenter
      onExit={handleClose}
      dialogStyle={{ width: '100%' }}
      {...props}
    >
      <div className={styles.body}>
        {!!headline && (
          <header className={styles.header}>
            <Text variant="h3">{headline}</Text>
          </header>
        )}

        <div className="modal-body">{children}</div>
        {(!!actionTitle || !!cancelTitle) && (
          <footer className={styles.footer}>
            {cancelTitle && (
              <Button onClick={handleClose} color="secondary">
                {cancelTitle}
              </Button>
            )}

            {actionTitle && (
              <Button onClick={handleAction} color="primary">
                {actionTitle}
              </Button>
            )}
          </footer>
        )}
      </div>
    </ReactAriaModal>
  )
}

export default Modal
