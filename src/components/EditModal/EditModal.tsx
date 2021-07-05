import React, { useState } from 'react'
import styles from './EditModal.module.scss'
import Text from 'components/Text'
import Button from 'components/Button'
import { VoidExpression } from 'typescript'
import InputText from 'components/InputText'

export interface EditModalProps {
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  isOpen: boolean
  onClose: (session: any | null) => void
  session: any
}

/**
 * Primary UI component for user interaction
 */
export const EditModal = ({ className, isOpen, onClose, session, ...props }: EditModalProps) => {
  const classes = [styles.wrapper, className].join(' ').trim()
  const [editedSession, setEditedSession] = useState(session)
  console.log(editedSession)
  return (
    <form className={styles.wrapper} {...props} onSubmit={() => onClose(editedSession)}>
      <Text>Edit session?</Text>
      <div className={styles.row}>
        <Text>Name: </Text>
        <InputText
          value={editedSession.name}
          onChange={(name) => setEditedSession((s: any) => ({ ...s, name }))}
        />
      </div>
      <div className={styles.row}>
        <Text>Start Date: </Text>
        <InputText
          value={editedSession.startDate}
          onChange={(startDate) => setEditedSession((s: any) => ({ ...s, startDate }))}
        />
      </div>
      <div className={styles.row}>
        <Text>End Date: </Text>
        <InputText
          value={editedSession.endDate}
          onChange={(endDate) => setEditedSession((s: any) => ({ ...s, endDate }))}
        />
      </div>

      <div className={styles.row}>
        <Button type="button" onClick={() => onClose(null)}>
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  )
}

export default EditModal
