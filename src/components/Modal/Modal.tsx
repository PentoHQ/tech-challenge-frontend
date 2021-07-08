import React, { ReactChild } from 'react';
import { XIcon } from '@heroicons/react/outline';

import Button from 'components/Button';
import Text from 'components/Text';
import IconButton from 'components/IconButton';

import styles from './Modal.module.scss';

export interface ModalProps {
  /**
   * Modal contents
   */
  children: React.ReactNode;
  /**
   * Modal title
   */
  title: string;
  /**
   * Should modal be visibe?
   */
  visible: boolean;
  /**
   * Handle modal visibility
   */
  setVisible: (data: boolean) => void;
  /**
   * You can provide a custom footer for the modal
   */
  footer?: ReactChild | ReactChild[];
  /**
   * Handle the action you want to do when Ok button is pressed
   */
  onOk?: () => void;
  /**
   * Handle the action you want to do when Cancel button is pressed
   */
  onCancel?: () => void;
}

function Modal({
  children,
  title,
  visible,
  setVisible,
  footer,
  onOk,
  onCancel,
}: ModalProps) {
  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <div className={styles.modalWrapper} onClick={handleClose}>
      <div
        className={styles.modalContent}
        onClick={(e: any) => e?.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <Text variant="h3">{title}</Text>
          <IconButton color="secondary" size="small" onClick={handleClose}>
            <XIcon></XIcon>
          </IconButton>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          {footer}
          {!!onOk && (
            <Button
              color="success"
              className={styles.modalBtn}
              onClick={handleOk}
            >
              Ok
            </Button>
          )}
          {!!onCancel && (
            <Button
              color="danger"
              className={styles.modalBtn}
              onClick={handleClose}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
