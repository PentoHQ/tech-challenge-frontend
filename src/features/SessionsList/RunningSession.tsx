import ElapsedTime from '../../components/ElapsedTime'
import FormRow from '../../components/FormRow'
import StopButton from '../../components/StopButton'

interface RunningSessionProps {
  name: string
  startDate: Date
  isLoading: boolean
  onStop: () => void
}

export default function RunningSession(props: RunningSessionProps) {
  const { name, isLoading, startDate, onStop } = props
  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <ElapsedTime fromDate={startDate} />
      <StopButton onClick={onStop} disabled={isLoading}></StopButton>
    </FormRow>
  )
}
