import { differenceInSeconds, intervalToDuration } from 'date-fns'
import { useMemo } from 'react'
import FormRow from 'src/components/FormRow'
import StopButton from 'src/components/StopButton'
import { useTimer } from 'use-timer'
import { useRunningSession } from './hooks'

type Props = {
  name: string
  startDate: Date
}

const RunningSession = ({ name, startDate }: Props): JSX.Element => {
  const { stop, isLoading } = useRunningSession()

  const secondsPassesSinceStart = useMemo(() => differenceInSeconds(new Date(), startDate), [
    startDate,
  ])

  const { time } = useTimer({
    initialTime: secondsPassesSinceStart,
    autostart: true,
  })

  const { hours, minutes, seconds } = useMemo(
    () => intervalToDuration({ start: 0, end: time * 1000 }),
    [time],
  )

  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      <StopButton onClick={stop} disabled={isLoading}></StopButton>
    </FormRow>
  )
}

export default RunningSession
