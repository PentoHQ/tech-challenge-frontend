import { getWeek } from 'date-fns';
import { eachWeekOfInterval, format } from 'date-fns/fp';

import { useSessionsQueryQuery } from 'generated/graphql';
import { diffDateStrings } from 'utils/diffDateStrings';
import { Session } from '../types';

const formatDay = format('yyyy/MM/dd');

type DailyData = { [name: string]: number };
type SessionsByDay = { [date: string]: DailyData };
type accumulator = { names: Set<string>; sessionsByDay: SessionsByDay };

function groupSessionsByDay(sessions: Session[]) {
  console.log(
    'test',
    eachWeekOfInterval({
      start: new Date(sessions[0].startDate),
      end: new Date(sessions[sessions.length - 1].startDate),
    }),
    getWeek(new Date(sessions[0].startDate))
  );
  const initial: accumulator = { names: new Set(), sessionsByDay: {} };
  const { names, sessionsByDay } = sessions.reduce(
    ({ names, sessionsByDay }, { startDate, endDate, name }) => {
      const dateStr = formatDay(new Date(startDate));
      names.add(name);
      const dayData = sessionsByDay[dateStr] || {
        [name]: 0,
        startDate: dateStr,
      };
      const duration = diffDateStrings(startDate, endDate);

      return {
        names,
        sessionsByDay: {
          ...sessionsByDay,
          [dateStr]: {
            ...dayData,
            [name]: (dayData[name] || 0) + duration,
          },
        },
      };
    },
    initial
  );
  return {
    names: Array.from(names),
    sessions: Object.values(sessionsByDay),
  };
}

export default function useDailyData() {
  const { data, loading, error } = useSessionsQueryQuery();
  // We need to type this data or TS will infer it as names: string[] | never[]
  const defaultData: { names: string[]; sessions: DailyData[] } = {
    names: [],
    sessions: [],
  };
  if (!data || loading) return { ...defaultData, error, loading };
  return { ...groupSessionsByDay(data.sessions), error, loading };
}
