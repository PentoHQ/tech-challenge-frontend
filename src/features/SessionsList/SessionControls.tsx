import Spinner from '../../components/Spinner'
import Text from '../../components/Text'
import FormRow from '../../components/FormRow'
import { useRunningSession } from './hooks'
import RunningSession from './RunningSession'
import SessionInput from './SessionInput'

export default function SessionControls() {
  const { runningSession, isLoading, startSession, stop } = useRunningSession()
  if (isLoading)
    return (
      <FormRow align="left" stretchChildren={false} alignY="center" childSpacing="compact">
        <Spinner size="small" />
        <Text>Loading...</Text>
      </FormRow>
    )
  return runningSession ? (
    <RunningSession
      name={runningSession.name}
      startDate={new Date(runningSession.startDate)}
      isLoading={isLoading}
      onStop={stop}
    />
  ) : (
    <SessionInput isLoading={isLoading} onStart={startSession} />
  )
}
