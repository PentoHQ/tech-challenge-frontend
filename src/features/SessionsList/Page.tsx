import { useState } from 'react'

import styles from './Page.module.scss'

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

import Loader from 'components/Loader'

import SessionEditItem from './SessionEditItem'

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession()
  return <PlayButton size="small" onClick={() => switchSession(name)}></PlayButton>
}

export default function SessionsListPage(props: any) {
  const { data, isLoading, error } = useGetSessions()
  const [editingId, setEditingId] = useState(null)

  const resetEditingId = () => {
    setEditingId(null)
  }

  return (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard className={styles.sessionListWrapper}>
        {isLoading ? (
          <Loader type="spinner" />
        ) : error ? (
          error.message
        ) : (
          <List>
            {data?.sessions.map(({ id, name, startDate, endDate }) => {
              return editingId === id ? (
                <SessionEditItem
                  key={id}
                  id={id}
                  name={name}
                  startDate={startDate}
                  endDate={endDate}
                  onClick={resetEditingId}
                />
              ) : (
                <ListItem
                  key={id}
                  title={name}
                  subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                  onClick={() => setEditingId(id)}
                  action={<RowAction name={name} />}
                />
              )
            })}
          </List>
        )}
      </RawCard>
    </PageBody>
  )
}
