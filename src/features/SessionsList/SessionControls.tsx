import { SyntheticEvent, useState } from 'react'

import Loader from 'components/Loader'
import StopWatch from 'components/StopWatch'

import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import PlayButton from '../../components/PlayButton'
import StopButton from '../../components/StopButton'
import { useRunningSession } from './hooks'
interface RunningProps {
  isLoading: boolean
  onSubmit: () => void
  name: string
  startDate: Date
}

function RunningSession({ isLoading, onSubmit, name, startDate }: RunningProps) {
  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <StopWatch startDate={startDate} />
      <StopButton onClick={onSubmit} disabled={isLoading}></StopButton>
    </FormRow>
  )
}

export default function SessionControls() {
  const { isLoading, runningSession, startSession, stop } = useRunningSession()

  const handleStartSession = (sessionName: string) => {
    if (!sessionName) {
      return
    }
    startSession(sessionName)
  }

  const handleStopSession = () => {
    stop()
  }

  if (isLoading)
    return (
      <FormRow>
        <Loader type="inline" />
      </FormRow>
    )
  return runningSession ? (
    <RunningSession
      isLoading={isLoading}
      onSubmit={handleStopSession}
      name={runningSession.name}
      startDate={new Date(runningSession.startDate)}
    />
  ) : (
    <SessionInput isLoading={isLoading} onSubmit={handleStartSession} />
  )
}

interface SessionInputProps {
  onSubmit: any
  isLoading: boolean
}

function SessionInput({ onSubmit, isLoading }: SessionInputProps) {
  const [sessionName, setSessionName] = useState('')

  const handleSubmit = (e?: SyntheticEvent) => {
    e?.preventDefault()
    onSubmit(sessionName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRow alignY="center" stretchLastChild={false}>
        <InputText onChange={setSessionName} value={sessionName}></InputText>
        <PlayButton onClick={handleSubmit} disabled={isLoading} />
      </FormRow>
    </form>
  )
}
