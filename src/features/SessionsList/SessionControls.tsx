import { SyntheticEvent, useState } from 'react'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import PlayButton from '../../components/PlayButton'
import StopButton from '../../components/StopButton'
import Timer from '../../components/Timer'
import { useRunningSession } from './hooks'

interface RunningProps {
  name: string
  startDate: Date
}

function RunningSession({ name, startDate }: RunningProps) {
  const { stop, isLoading } = useRunningSession()
  const [isStopped, setTimerState] = useState(false)

  const handleStop = () => {
    stop()
    setTimerState(true)
  }

  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}

      <Timer start={startDate} isStopped={isStopped} />

      <StopButton onClick={handleStop} disabled={isLoading} isLoading={isLoading} />
    </FormRow>
  )
}

export default function SessionControls() {
  const { isLoading, runningSession } = useRunningSession()
  if (isLoading)
    return (
      <FormRow>
        <span>Loading</span> ...
      </FormRow>
    )
  return runningSession ? (
    <RunningSession name={runningSession.name} startDate={new Date(runningSession.startDate)} />
  ) : (
    <SessionInput />
  )
}

function SessionInput() {
  const [sessionName, setSessionName] = useState('')
  const { isLoading, startSession } = useRunningSession()
  const submit = (e?: SyntheticEvent) => {
    e?.preventDefault()
    if (!sessionName) {
      return
    }
    startSession(sessionName)
  }
  return (
    <form onSubmit={submit}>
      <FormRow alignY="center" stretchLastChild={false}>
        <InputText onChange={setSessionName} value={sessionName} />
        <PlayButton onClick={submit} isLoading={isLoading} />
      </FormRow>
    </form>
  )
}
