import { intervalToDuration } from 'date-fns'
import { SyntheticEvent, useState, useEffect } from 'react'
import FormRow from '../../components/FormRow'
import InputText from '../../components/InputText'
import PlayButton from '../../components/PlayButton'
import StopButton from '../../components/StopButton'
import { useRunningSession } from './hooks'
import Loader from '../../components/Loader'
import './SessionControls.scss'

interface RunningProps {
  name: string
  isLoading: boolean
  startDate: Date
  stop: () => void
}

function RunningSession({ isLoading, name, startDate, stop }: RunningProps) {
  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <SessionTimer startDate={startDate} />
      <StopButton onClick={stop} disabled={isLoading}></StopButton>
    </FormRow>
  )
}

function SessionTimer({ startDate }: { startDate: Date }) {
  const [time, setTime] = useState('0:0:0')

  useEffect(() => {
    let interval = setInterval(() => {
      const { hours, minutes, seconds } = intervalToDuration({ start: startDate, end: new Date() })
      setTime(`${hours}:${minutes}:${seconds}`)
    }, 1000)

    // Clear timeout if the component is unmounted
    return () => {
      clearInterval(interval)
    }
  }, [time])

  return <div>{time}</div>
}

export default function SessionControls() {
  const { stop, isLoading, runningSession, startSession } = useRunningSession()

  if (isLoading) return <Loader />
  return runningSession ? (
    <RunningSession
      name={runningSession.name}
      startDate={new Date(runningSession.startDate)}
      stop={stop}
      isLoading={isLoading}
    />
  ) : (
    <SessionInput startSession={startSession} />
  )
}

function SessionInput({ startSession }: { startSession: (name: string) => void }) {
  const [sessionName, setSessionName] = useState('')
  const [error, setError] = useState(false)

  const submit = (e?: SyntheticEvent) => {
    e?.preventDefault()
    if (!sessionName) {
      setError(true)
      return
    }
    startSession(sessionName)
  }
  return (
    <form onSubmit={submit}>
      <FormRow alignY="center" stretchLastChild={false}>
        <InputText
          onChange={(value) => {
            setSessionName(value)
            if (value.length) setError(false)
          }}
          value={sessionName}
          className={error ? 'error' : ''}
        ></InputText>
        <PlayButton onClick={submit} />
      </FormRow>
      {error ? <p>Please insert the session name</p> : ''}
    </form>
  )
}
