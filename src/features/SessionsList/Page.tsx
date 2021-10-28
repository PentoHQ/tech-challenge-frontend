import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import Spacer from '../../components/Spacer'
import Modal from '../../components/Modal'
import EditSession from './EditSession'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession } from './hooks'
import SessionControls from './SessionControls'
import { SyntheticEvent } from 'react'
import { useState } from 'react'

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession()

  const handleClick = (e?: SyntheticEvent) => {
    e?.stopPropagation()
    switchSession(name)
  }

  return <PlayButton size="small" onClick={handleClick} />
}

const modalDataDefault = { id: '', name: '', startDate: '', endDate: '' }

export default function SessionsListPage(props: any) {
  const { data, isLoading, error } = useGetSessions()
  const [isModalOpen, setModalState] = useState(false)
  const [modalData, setModalData] = useState(modalDataDefault)

  const handleSessionClick = (data: any) => {
    setModalState(true)
    setModalData(data)
  }

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
                onClick={() => handleSessionClick({ id, name, startDate, endDate })}
              />
            ))}
          </List>
        )}
      </RawCard>

      <Modal
        open={isModalOpen}
        onClose={() => setModalState(false)}
        headline="Edit session"
      >
        <EditSession data={modalData} onClose={() => setModalState(false)} />
      </Modal>
    </PageBody>
  )
}
