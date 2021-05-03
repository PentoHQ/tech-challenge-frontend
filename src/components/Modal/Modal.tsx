import { ReactElement, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'
import CloseButton from '../../components/CloseButton'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../Button'

export interface ActionButton {
  text: string
  onClick: () => void
}

export interface ModalProps {
  actions?: ActionButton[]
  children: ReactElement | string
  className?: string
  closeModal: () => void
  isOpen: boolean
  title?: string
}

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({ actions, children, className, closeModal, isOpen, title }: ModalProps) => {
  const classes = [styles.backdrop, className].join(' ').trim()

  useEffect(() => {
    const handleEscapeEvent = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleEscapeEvent)

    return () => {
      window.removeEventListener('keydown', handleEscapeEvent)
    }
  }, [closeModal])

  return createPortal(
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <motion.div
          className={classes}
          role="dialog"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className={styles.modalContent}>
            <CloseButton
              className={styles.closeButton}
              color="secondary"
              onClick={closeModal}
              size="small"
            />
            <div className={styles.modalHeader}>{title}</div>
            <div className={styles.modalBody}>{children}</div>
            <div className={styles.modalFooter}>
              {actions &&
                actions.map(({ text, onClick }) => (
                  <Button key={text} onClick={onClick}>
                    {text}
                  </Button>
                ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('root') as HTMLElement,
  )
}

export default Modal
