import { SyntheticEvent, useState } from 'react'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import PlayButton from '../../components/PlayButton'

interface SessionInputProps {
  isLoading: boolean
  onStart: (name: string) => any
}

export default function SessionInput(props: SessionInputProps) {
  const { isLoading, onStart } = props
  const [sessionName, setSessionName] = useState('')
  const submit = (e?: SyntheticEvent) => {
    e?.preventDefault()
    if (!sessionName) {
      alert('Cannot start a new session without a name, please choose one and retry')
      return
    }
    onStart(sessionName)
  }
  return (
    <form onSubmit={submit}>
      <FormRow alignY="center" stretchLastChild={false}>
        <InputText onChange={setSessionName} value={sessionName}></InputText>
        <PlayButton onClick={submit} disabled={isLoading} />
      </FormRow>
    </form>
  )
}
