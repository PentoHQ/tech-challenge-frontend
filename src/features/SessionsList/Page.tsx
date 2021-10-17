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
import EditSessionModal from './EditSessionModal'
import { SyntheticEvent, useState } from 'react'
import { Session } from '../../types'
import Alert from '../../components/Alert'

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession()
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation()
    switchSession(name)
  }
  return <PlayButton size="small" onClick={handleClick}></PlayButton>
}

export default function SessionsListPage() {
  const { data, isLoading, error } = useGetSessions()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [sessionToBeUpdated, setSessionToBeUpdated] = useState<Session | null>(null)

  const openEdit = (session: Session) => {
    setSessionToBeUpdated(session)
    setEditModalOpen(true)
  }

  const closeEdit = () => {
    setSessionToBeUpdated(null)
    setEditModalOpen(false)
  }

  return (
    <PageBody className={styles.wrapper}>
      {(error && <Alert kind="error" text={error.message} />) || <></>}

      <Spacer mb={4}>
        <SessionControls />
      </Spacer>

      <RawCard className={styles.listContainer}>
        {isLoading ? (
          <Spinner className={styles.spinner} size="large" />
        ) : (
          <List>
            {data?.sessions.map((session) => (
              <ListItem
                key={session.id}
                className={styles.listItem}
                title={session.name}
                subtitle={msToHuman(dateDiff(session.startDate, session.endDate))}
                action={<RowAction name={session.name} />}
                onClick={() => openEdit(session)}
              />
            ))}
          </List>
        )}
      </RawCard>
      {(sessionToBeUpdated && (
        <EditSessionModal open={editModalOpen} onClose={closeEdit} session={sessionToBeUpdated} />
      )) || <></>}
    </PageBody>
  )
}
