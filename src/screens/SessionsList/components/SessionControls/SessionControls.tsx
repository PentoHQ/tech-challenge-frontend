import { SyntheticEvent, useState } from 'react';

import FormRow from 'components/FormRow';
import StopButton from 'components/StopButton';
import InputText from 'components/InputText';
import PlayButton from 'components/PlayButton';
import Timer from 'components/Timer';
import { useRunningSession } from 'hooks';

interface RunningProps {
  name: string;
  startDate: Date;
}

function RunningSession({ name, startDate }: RunningProps) {
  const { stop, isLoading } = useRunningSession();

  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <Timer startDate={startDate} size="h3" />
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
  const { runningSession } = useRunningSession();
  return runningSession ? (
    <RunningSession
      name={runningSession.name}
      startDate={new Date(runningSession.startDate)}
    />
  ) : (
    <SessionInput />
  );
}
