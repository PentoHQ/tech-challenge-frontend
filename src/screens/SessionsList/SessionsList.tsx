import List from 'components/List';
import ListItem from 'components/ListItem';
import Spacer from 'components/Spacer';
import PlayButton from 'components/PlayButton';
import Loading from 'components/Loading';
import { PageBody } from 'components/Page';
import { RawCard } from 'components/Card';
import { msToHuman } from 'utils/formatters/formatDateDiff';
import { diffDateStrings } from 'utils/diffDateStrings';
import useSwitchSession from 'hooks/useSwitchSession';
import { useGetSessions, useRunningSession } from 'hooks';
import SessionControls from './components/SessionControls';

import styles from './SessionsList.module.scss';

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
          <div className={styles.wrapper}>{error.message}</div>
        ) : (
          <List scrollable>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                key={id}
                title={name}
                subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                action={<RowAction name={name} />}
              />
            ))}
          </List>
        )}
      </RawCard>
    </PageBody>
  ) : (
    <div className={styles.wrapper}>
      <Loading />
    </div>
  );
}
