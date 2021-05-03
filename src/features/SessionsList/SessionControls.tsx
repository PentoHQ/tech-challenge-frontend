import { SyntheticEvent, useState } from 'react'
import ContentLoader from 'react-content-loader'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import PlayButton from '../../components/PlayButton'
import StopButton from '../../components/StopButton'
import { useRunningSession } from './hooks'
import Timer from './Timer'

interface RunningProps {
  isLoading: boolean
  name: string
  startDate: Date
  stop: () => void
}

interface SessionInputProps {
  isLoading: boolean
  startSession: (name: string) => void
}

function LoadingSkeleton() {
  return (
    <FormRow>
      <ContentLoader
        width={680}
        height={42}
        viewBox="0 0 680 42"
        backgroundColor="#f0f1f5"
        foregroundColor="#dde0e9"
      >
        <rect x="0" y="13" rx="3" ry="3" width="128" height="14" />
        <rect x="352" y="13" rx="3" ry="3" width="72" height="14" />
      </ContentLoader>
      <ContentLoader
        width={48}
        height={48}
        viewBox="0 0 48 48"
        backgroundColor="#f0f1f5"
        foregroundColor="#dde0e9"
      >
        <rect x="0" y="0" rx="5" ry="5" width="48" height="48" />
      </ContentLoader>
    </FormRow>
  )
}

function RunningSession({ isLoading, name, startDate, stop }: RunningProps) {
  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <Timer startDate={startDate} />
      <StopButton onClick={stop} disabled={isLoading} />
    </FormRow>
  )
}

function SessionInput({ isLoading, startSession }: SessionInputProps) {
  const [sessionName, setSessionName] = useState('')

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
        <InputText onChange={setSessionName} value={sessionName}></InputText>
        <PlayButton onClick={submit} disabled={isLoading} />
      </FormRow>
    </form>
  )
}

export default function SessionControls() {
  const { isLoading, runningSession, startSession, stop } = useRunningSession()

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return runningSession ? (
    <RunningSession
      isLoading={isLoading}
      name={runningSession.name}
      startDate={new Date(runningSession.startDate)}
      stop={stop}
    />
  ) : (
    <SessionInput isLoading={isLoading} startSession={startSession} />
  )
}
