import { format } from 'date-fns'
import { useState } from 'react'
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import Modal from '../../components/Modal'
import Spinner from '../../components/Spinner'
import { Session } from '../../types'
import { useUpdateSession } from './hooks'
import Spacer from '../../components/Spacer'
import Alert from '../../components/Alert'

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
          backdropPosition="absolute"
          backdropProps={{ backgroundColor: 'white' }}
        />
      )}
      {error && <Alert kind="error" text={error.message} />}
      <Spacer mb={2} mt={1}>
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
