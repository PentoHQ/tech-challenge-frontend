import List from '../../components/List';
import ListItem from '../../components/ListItem';
import SessionControls from './components/SessionControls';
import Spacer from '../../components/Spacer';
import PlayButton from '../../components/PlayButton';
import { PageBody } from '../../components/Page';
import { RawCard } from '../../components/Card';
import { msToHuman } from '../../util/formatters/formatDateDiff';
import { diffDateStrings } from '../../util/diffDateStrings';
import { useGetSessions, useSwitchSession } from 'features/SessionsList/hooks';

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession();
  return (
    <PlayButton size="small" onClick={() => switchSession(name)}></PlayButton>
  );
}

export default function SessionsList() {
  const { data, isLoading, error } = useGetSessions();
  return (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard>
        {isLoading ? (
          'Loading'
        ) : error ? (
          error.message
        ) : (
          <List>
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
  );
}
