import React from 'react'
import ReactDOM from 'react-dom'

export interface ModalProps {
  /**
   * EditModal contents
   */
  children: React.ReactNode
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({ children }: ModalProps) => {
  const modalRoot = document.getElementById('root')

  if (!modalRoot) return null

  return ReactDOM.createPortal(children, modalRoot)
}

export default Modal
