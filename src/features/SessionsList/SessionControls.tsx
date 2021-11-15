import { Timer } from 'components/Timer'
import { SyntheticEvent, useState } from 'react'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import PlayButton from '../../components/PlayButton'
import StopButton from '../../components/StopButton'
import { useRunningSession } from './hooks'

interface RunningProps {
  name: string
  startDate: Date
  disabled?: boolean
}

function RunningSession({ name, startDate, disabled }: RunningProps) {
  const { stop, isLoading } = useRunningSession()

  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <Timer start={startDate} />
      <StopButton onClick={stop} disabled={isLoading || disabled}></StopButton>
    </FormRow>
  )
}

export default function SessionControls() {
  const { isLoading, runningSession, startSession } = useRunningSession()

  return runningSession ? (
    <RunningSession
      name={runningSession.name}
      startDate={new Date(runningSession.startDate)}
      disabled={isLoading}
    />
  ) : (
    <SessionInput isLoading={isLoading} onSubmit={startSession} />
  )
}

interface SessionInputProps {
  isLoading?: boolean
  onSubmit: (name: string) => void
}

const SessionInput: React.FC<SessionInputProps> = ({ isLoading, onSubmit }) => {
  const [sessionName, setSessionName] = useState('')

  const submit = (e?: SyntheticEvent) => {
    e?.preventDefault()
    if (!sessionName) {
      return
    }
    onSubmit(sessionName)
  }
  return (
    <form onSubmit={submit}>
      <FormRow alignY="center" stretchLastChild={false}>
        <InputText onChange={setSessionName} value={sessionName} disabled={isLoading}></InputText>
        <PlayButton onClick={submit} disabled={isLoading} />
      </FormRow>
    </form>
  )
}
