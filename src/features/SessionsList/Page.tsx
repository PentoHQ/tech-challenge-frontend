import ListSkeleton from 'components/ListSkeleton'
import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import Spacer from '../../components/Spacer'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession } from './hooks'
import SessionControls from './SessionControls'
import styles from './SessionsList.module.scss'

function RowAction({
  name,
  id,
  startDate,
  endDate,
}: {
  name: string
  id: string
  startDate: string
  endDate: string
}) {
  const switchSession = useSwitchSession()
  return (
    <PlayButton
      size="small"
      onClick={() => switchSession(name, id, startDate, endDate)}
    ></PlayButton>
  )
}

export default function SessionsListPage(props: any) {
  const { data, isLoading, error } = useGetSessions()
  return (
    <PageBody className={styles['scroll-page']}>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard className={styles['scroll-list']}>
        {isLoading ? (
          <List>
            {Array.from(new Array(3)).map((e, i) => {
              return <ListSkeleton key={i} />
            })}
          </List>
        ) : error ? (
          error.message
        ) : (
          <List>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                key={id}
                title={name}
                subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                action={<RowAction name={name} id={id} startDate={startDate} endDate={endDate} />}
              />
            ))}
          </List>
        )}
      </RawCard>
    </PageBody>
  )
}
