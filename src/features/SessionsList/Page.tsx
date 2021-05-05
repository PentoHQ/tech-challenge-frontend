import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import LoadingSpinner from '../../components/LoadingSpinner'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import DeleteButton from '../../components/DeleteButton'
import Spacer from '../../components/Spacer'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useDeleteSession, useSwitchSession } from './hooks'
import SessionControls from './SessionControls'

function RowAction({ id, name }: { id: number; name: string }) {
  const switchSession = useSwitchSession()
  const { deleteSession } = useDeleteSession()

  return (
    <>
      <DeleteButton size="small" onClick={() => deleteSession(id)} />
      <PlayButton size="small" onClick={() => switchSession(name)} />
    </>
  )
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
          <LoadingSpinner />
        ) : error ? (
          error.message
        ) : (
          <List>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                key={id}
                id={id}
                title={name}
                subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                action={<RowAction name={name} id={id} />}
              />
            ))}
          </List>
        )}
      </RawCard>
    </PageBody>
  )
}
