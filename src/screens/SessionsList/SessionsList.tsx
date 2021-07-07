import { format } from 'date-fns';

import List from 'components/List';
import ListItem from 'components/ListItem';
import Spacer from 'components/Spacer';
import PlayButton from 'components/PlayButton';
import Loading from 'components/Loading';
import Error from 'components/Error';
import { PageBody } from 'components/Page';
import { RawCard } from 'components/Card';
import { diffDateStrings } from 'utils/diffDateStrings';
import { dayOfMonth } from 'utils/dayOfMonth';
import { msToHourMinSec } from 'utils/formatters/msToHourMinSec';
import { useGetSessions, useRunningSession } from 'hooks';
import useSwitchSession from 'hooks/useSwitchSession';
import SessionControls from './components/SessionControls';

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession();
  return (
    <PlayButton size="small" onClick={() => switchSession(name)}></PlayButton>
  );
}

export default function SessionsList() {
  const { data, isLoading: isListLoading, error } = useGetSessions();
  const { isLoading } = useRunningSession();

  return !isListLoading && !isLoading ? (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard>
        {error ? (
          <Error message={error.message} />
        ) : (
          <List scrollable>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                key={id}
                title={name}
                subtitle=""
                action={<RowAction name={name} />}
                header={
                  <div>
                    {format(new Date(startDate), 'iii')},{' '}
                    {dayOfMonth(new Date(startDate))}
                  </div>
                }
                details={
                  <div>
                    {msToHourMinSec(diffDateStrings(startDate, endDate)).join(
                      ':'
                    )}
                  </div>
                }
              />
            ))}
          </List>
        )}
      </RawCard>
    </PageBody>
  ) : (
    <Loading />
  );
}
