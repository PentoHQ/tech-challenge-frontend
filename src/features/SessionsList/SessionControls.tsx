import ElapsedTime from 'components/ElapsedTime'
import Spinner from 'components/Spinner'
import Text from 'components/Text'
import { SyntheticEvent, useState } from 'react'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import PlayButton from '../../components/PlayButton'
import StopButton from '../../components/StopButton'
import { useRunningSession } from './hooks'

interface RunningProps {
  name: string
  startDate: Date
}

function RunningSession({ name, startDate }: RunningProps) {
  const { stop, isLoading } = useRunningSession()
  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <ElapsedTime fromDate={startDate} />
      <StopButton onClick={stop} disabled={isLoading}></StopButton>
    </FormRow>
  )
}

export default function SessionControls() {
  const { isLoading, runningSession } = useRunningSession()
  if (isLoading)
    return (
      <FormRow align="left" stretchChildren={false} alignY="center" childSpacing="compact">
        <Spinner size="small" />
        <Text>Loading...</Text>
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
        <InputText onChange={setSessionName} value={sessionName}></InputText>
        <PlayButton onClick={submit} disabled={isLoading} />
      </FormRow>
    </form>
  )
}
