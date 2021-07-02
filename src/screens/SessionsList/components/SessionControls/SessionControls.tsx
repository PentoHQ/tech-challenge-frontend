import { SyntheticEvent, useEffect, useState } from 'react';
import { intervalToDuration, addMilliseconds } from 'date-fns';

import FormRow from '../../../../components/FormRow';
import StopButton from '../../../../components/StopButton';
import InputText from '../../../../components/InputText';
import PlayButton from '../../../../components/PlayButton';
import { useRunningSession } from 'hooks';

interface TimerProps {
  startDate: Date;
}

function Timer({ startDate }: TimerProps) {
  const [time, setTime] = useState<number>(0);
  const { runningSession } = useRunningSession();

  const { hours, minutes, seconds } = intervalToDuration({
    start: startDate,
    /** timezoneDiff = new Date(time).getTimezoneOffset()
     * dateWithoutTimezoneDiff = addSeconds(new Date(), new Date(time).getTimezoneOffset())
     */
    end: addMilliseconds(new Date(), new Date(time).getTimezoneOffset()),
  });

  useEffect(() => {
    let interval: any = null;
    if (runningSession) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [runningSession]);

  return (
    <div>
      {hours}:{minutes}:{seconds}
    </div>
  );
}

interface RunningProps {
  name: string;
  startDate: Date;
}

function RunningSession({ name, startDate }: RunningProps) {
  const { stop, isLoading } = useRunningSession();

  return (
    <FormRow alignY="center" stretchLastChild={false}>
      {name}
      <Timer startDate={startDate} />
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
