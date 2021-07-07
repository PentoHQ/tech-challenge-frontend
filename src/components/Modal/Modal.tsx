import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';

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
  onOk = () => console.log('Ok button pressed!'),
  onCancel = () => console.log('Close button pressed!'),
}: ModalProps) {
  if (!visible) return null;

  const handleClose = () => {
    onCancel();
    setVisible(false);
  };

  const handleOk = () => {
    onOk();
    setVisible(false);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <Text variant="h3">{title}</Text>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <div className={styles.modalActions}>
            <Button
              color="success"
              className={styles.modalBtn}
              onClick={handleOk}
            >
              Ok
            </Button>
            <Button
              color="danger"
              className={styles.modalBtn}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
