import Spinner from 'components/Spinner'
import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import Spacer from '../../components/Spacer'
import { dateDiff } from '../../util/dateDiff'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession } from './hooks'
import SessionControls from './SessionControls'
import styles from './Page.module.scss'

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession()
  return <PlayButton size="small" onClick={() => switchSession(name)}></PlayButton>
}

export default function SessionsListPage(props: any) {
  const { data, isLoading, error } = useGetSessions()

  return (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard>
        {isLoading ? (
          <Spinner className={styles.spinner} size="large" />
        ) : error ? (
          error.message
        ) : (
          <List>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                key={id}
                title={name}
                subtitle={msToHuman(dateDiff(startDate, endDate))}
                action={<RowAction name={name} />}
              />
            ))}
          </List>
        )}
      </RawCard>
    </PageBody>
  )
}
