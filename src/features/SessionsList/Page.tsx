import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import Spacer from '../../components/Spacer'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession, useEditSession } from './hooks'
import SessionControls from './SessionControls'
import Loader from '../../components/Loader'
import { useState } from 'react'
import EditModal from 'components/EditModal'
import Modal from 'components/Modal/Modal'
import Backdrop from 'components/Backdrop'
import { Sessions } from 'generated/graphql'

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession()
  return <PlayButton size="small" onClick={() => switchSession(name)}></PlayButton>
}

export default function SessionsListPage(props: any) {
  const { data, isLoading: isLoadingSessions, error: getSessionsError } = useGetSessions()
  const { updateSession, isLoading: isEditingSession, error: editSessionError } = useEditSession()
  const [editingId, setEditingId] = useState<string | null>(null)
  const editingSession = data?.sessions?.find((session) => session.id === editingId)

  const handleUpdate = ({ id, name, startDate, endDate }: Sessions) => {
    // update sessions with newly edited session
    updateSession({ name, startDate, endDate }, { id })
  }

  return (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard scrollEnabled>
        {isLoadingSessions ? (
          <Loader />
        ) : getSessionsError ? (
          getSessionsError.message
        ) : (
          <List>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                onClick={() => {
                  setEditingId(id)
                }}
                key={id}
                title={name}
                subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                action={<RowAction name={name} />}
              />
            ))}
          </List>
        )}
      </RawCard>
      {editingSession != null ? (
        <Modal>
          <Backdrop>
            <EditModal
              isOpen={editingSession != null}
              onClose={async (session) => {
                if (session) {
                  await handleUpdate(session)
                }
                setEditingId(null)
              }}
              session={editingSession}
            />
          </Backdrop>
        </Modal>
      ) : (
        <></>
      )}
    </PageBody>
  )
}
