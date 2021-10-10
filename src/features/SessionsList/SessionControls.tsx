import { useRunningSession } from './hooks'
import NewSessionForm from './NewSessionForm'
import RunningSession from './RunningSession'

const SessionControls = (): JSX.Element => {
  const { runningSession } = useRunningSession()

  if (!runningSession) {
    return <NewSessionForm />
  }

  return (
    <RunningSession name={runningSession.name} startDate={new Date(runningSession.startDate)} />
  )
}

export default SessionControls
