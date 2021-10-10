import { RawCard } from 'src/components/Card'
import List from 'src/components/List'
import ListItem from 'src/components/ListItem'
import Loading from 'src/components/Loading'
import { PageBody } from 'src/components/Page'
import PlayButton from 'src/components/PlayButton'
import Spacer from 'src/components/Spacer'
import { diffDateStrings } from 'src/util/diffDateStrings'
import { msToHuman } from 'src/util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession } from './hooks'
import SessionControls from './SessionControls'
import styles from './SessionList.module.scss'

const RowAction = ({ name }: { name: string }): JSX.Element => {
  const switchSession = useSwitchSession()

  return <PlayButton onClick={() => switchSession(name)}></PlayButton>
}

const SessionsListPage = (): JSX.Element => {
  const { data, isLoading } = useGetSessions()

  if (isLoading) {
    return <Loading />
  }

  return (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard className={styles.list}>
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
      </RawCard>
    </PageBody>
  )
}

export default SessionsListPage
