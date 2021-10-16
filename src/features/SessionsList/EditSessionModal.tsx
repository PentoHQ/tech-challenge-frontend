import { format } from 'date-fns'
import { useState } from 'react'
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import Modal from '../../components/Modal'
import Spinner from '../../components/Spinner'
import Text from '../../components/Text'
import { Session } from '../../types'
import { useUpdateSession } from './hooks'
import styles from './EditSessionModal.module.scss'
import Spacer from '../../components/Spacer'

interface EditSessionModalProps {
  className?: string
  session: Session
  open: boolean
  onClose: () => void
}

type SessionData = Omit<Session, 'id'>

// TODO: evaluate to move out these stuff, keep in mind that is needed just here for now
const dateTimeInputFormat = "yyyy-MM-dd'T'hh:mm"
const parseDateForState = (date: string) => format(new Date(date), dateTimeInputFormat)

export default function EditSessionModal(props: EditSessionModalProps) {
  const { className = '', session, open, onClose } = props

  const { updateSession, isLoading, error } = useUpdateSession(onClose)

  const [nameInput, setNameInput] = useState(session.name)

  const [startDateInput, setStartDateInput] = useState(() => parseDateForState(session.startDate))
  const [endDateInput, setEndDateInput] = useState(() => parseDateForState(session.endDate))

  const save = () => {
    const startDate = new Date(startDateInput)
    const endDate = new Date(endDateInput)

    if (startDate > endDate || endDate < startDate) {
      alert('Start date cannot be after end date and the end date cannot be before start date')
      return
    }

    const updated: SessionData = {
      name: nameInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    }

    updateSession(updated, session.id)
  }

  return (
    <Modal
      className={className}
      open={open}
      onClose={onClose}
      title={`Edit session "${session.name}"`}
      footer={
        <FormRow alignY="center" align="right" compact={true} stretchChildren={false}>
          <Button color="secondary" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button color="primary" onClick={save} disabled={isLoading}>
            Save
          </Button>
        </FormRow>
      }
    >
      {isLoading && (
        <Spinner
          withBackdrop={true}
          // TODO: improve this monstrosity (position prop directly on the Backdrop? proxed by Spinner? evaluate...)
          backdropProps={{ backgroundColor: 'white', className: styles.spinnerBackdrop }}
        />
      )}
      {error && (
        // TODO: create component alert
        <Spacer className={styles.errorContainer} p={1} mb={2}>
          <Text color="danger" variant="body">
            {error.message}
          </Text>
        </Spacer>
      )}
      <Spacer mb={2}>
        <InputText label="Name" value={nameInput} disabled={isLoading} onChange={setNameInput} />
      </Spacer>
      <Spacer mb={2}>
        <InputText
          type="datetime-local"
          label="Start date"
          value={startDateInput}
          disabled={isLoading}
          onChange={setStartDateInput}
        />
      </Spacer>
      <Spacer mb={1}>
        <InputText
          type="datetime-local"
          label="End date"
          value={endDateInput}
          disabled={isLoading}
          onChange={setEndDateInput}
        />
      </Spacer>
    </Modal>
  )
}
