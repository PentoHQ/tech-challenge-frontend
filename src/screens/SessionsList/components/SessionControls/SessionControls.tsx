import { SyntheticEvent, useState } from 'react';
import { intervalToDuration } from 'date-fns';
import { useRunningSession } from 'features/SessionsList/hooks';

import FormRow from '../../../../components/FormRow';
import StopButton from '../../../../components/StopButton';
import InputText from '../../../../components/InputText';
import PlayButton from '../../../../components/PlayButton';

interface RunningProps {
  name: string;
  startDate: Date;
}

function RunningSession({ name, startDate }: RunningProps) {
  const { stop, isLoading } = useRunningSession();
  const { hours, minutes, seconds } = intervalToDuration({
    start: startDate,
    end: new Date(),
  });
  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      <StopButton onClick={stop} disabled={isLoading}></StopButton>
    </FormRow>
  );
}

function SessionInput() {
  const [sessionName, setSessionName] = useState('');
  const { isLoading, startSession } = useRunningSession();
  const submit = (e?: SyntheticEvent) => {
    e?.preventDefault();
    if (!sessionName) {
      return;
    }
    startSession(sessionName);
  };
  return (
    <form onSubmit={submit}>
      <FormRow alignY="center" stretchLastChild={false}>
        <InputText onChange={setSessionName} value={sessionName}></InputText>
        <PlayButton onClick={submit} disabled={isLoading} />
      </FormRow>
    </form>
  );
}

export default function SessionControls() {
  const { isLoading, runningSession } = useRunningSession();
  if (isLoading)
    return (
      <FormRow>
        <span>Loading</span> ...
      </FormRow>
    );
  return runningSession ? (
    <RunningSession
      name={runningSession.name}
      startDate={new Date(runningSession.startDate)}
    />
  ) : (
    <SessionInput />
  );
}
