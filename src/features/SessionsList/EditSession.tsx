import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputText from '../../components/InputText'
import Modal from '../../components/Modal'
import { useUpdateSession } from './hooks'

interface Props {
  isOpen: boolean
  session?: { id: string; name: string }
  toggleModal: Dispatch<SetStateAction<boolean>>
}

export default function EditSession({ isOpen, session, toggleModal }: Props) {
  const [name, setName] = useState('')
  const { updateSession } = useUpdateSession()

  useEffect(() => {
    if (session) {
      setName(session.name)
    }
  }, [session])

  const handleOnSessionSave = async () => {
    if (!name) {
      return
    }

    await updateSession(session?.id as string, name)

    toggleModal(false)
  }

  return (
    <Modal
      actions={[{ text: 'Save', onClick: handleOnSessionSave }]}
      closeModal={() => toggleModal(false)}
      isOpen={isOpen}
      title="Edit session name"
    >
      <InputText value={name} onChange={setName} />
    </Modal>
  )
}
