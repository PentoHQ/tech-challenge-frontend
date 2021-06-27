import useRunningSession from './useRunningSession';

export default function useSwitchSession() {
  const { startSession, stop, runningSession, isLoading } = useRunningSession();
  const switchSession = (name: string) => {
    if (isLoading) {
      throw new Error('Do not try to switch while running session is loading');
    }
    if (!runningSession) return startSession(name);
    return stop().then(() => startSession(name));
  };
  return switchSession;
}
