import ContentLoader from 'react-content-loader'
import { MouseEvent, useState } from 'react'
import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import Spacer from '../../components/Spacer'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession } from './hooks'
import EditSession from './EditSession'
import SessionControls from './SessionControls'
import styles from './SessionList.module.scss'

function LoadingSkeleton() {
  return (
    <ContentLoader
      width={750}
      height={200}
      viewBox="0 0 750 200"
      backgroundColor="#f0f1f5"
      foregroundColor="#dde0e9"
    >
      <rect x="16" y="24" rx="3" ry="3" width="128" height="13" />
      <rect x="16" y="48" rx="3" ry="3" width="64" height="12" />
      <rect x="710" y="36" rx="3" ry="3" width="24" height="24" />
      <rect x="16" y="88" rx="3" ry="3" width="128" height="13" />
      <rect x="16" y="112" rx="3" ry="3" width="64" height="12" />
      <rect x="710" y="100" rx="3" ry="3" width="24" height="24" />
      <rect x="16" y="152" rx="3" ry="3" width="128" height="13" />
      <rect x="16" y="176" rx="3" ry="3" width="64" height="12" />
      <rect x="710" y="164" rx="3" ry="3" width="24" height="24" />
      <rect x="16" y="176" rx="3" ry="3" width="64" height="12" />
      <rect x="710" y="164" rx="3" ry="3" width="24" height="24" />
    </ContentLoader>
  )
}

function RowAction({ name }: { name: string }) {
  const { isLoading, switchSession } = useSwitchSession()

  const handlePlayButtonClick = (e: MouseEvent) => {
    e.stopPropagation()
    switchSession(name)
  }

  return <PlayButton disabled={isLoading} size="small" onClick={handlePlayButtonClick}></PlayButton>
}

export default function SessionsListPage() {
  const [isModalOpen, toggleModal] = useState<boolean>(false)
  const [selectedSession, setSelectedSession] = useState<{ id: string; name: string }>()
  const { data, isLoading, error } = useGetSessions()

  const handleSessionClick = (session: { id: string; name: string }) => {
    toggleModal(true)
    setSelectedSession(session)
  }

  return (
    <>
      <EditSession isOpen={isModalOpen} session={selectedSession} toggleModal={toggleModal} />
      <PageBody>
        <Spacer pb={4}>
          <SessionControls />
        </Spacer>
        <RawCard className={styles.scrollableContent}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : error ? (
            error.message
          ) : (
            <List>
              {data?.sessions.map(({ id, name, startDate, endDate }) => (
                <ListItem
                  className={styles.sessionListItem}
                  key={id}
                  title={name}
                  subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                  action={<RowAction name={name} />}
                  onClick={() => handleSessionClick({ id, name })}
                />
              ))}
            </List>
          )}
        </RawCard>
      </PageBody>
    </>
  )
}
