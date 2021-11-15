import { BarLoader } from '../../components/BarLoader'
import { RowAction } from '../../components/RowAction'
import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'

import Spacer from '../../components/Spacer'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession, useDeleteSession, useChangeSession } from './hooks'
import SessionControls from './SessionControls'

export default function SessionsListPage(props: any) {
  const { data, isLoading, error } = useGetSessions()
  const { switchSession, isLoading: isSwitchLoading } = useSwitchSession()
  const { deleteById, isLoading: isDeleteLoading } = useDeleteSession()
  const { updateSession, isLoading: isUpdateLoading } = useChangeSession()

  const loading = isLoading || isSwitchLoading || isDeleteLoading || isUpdateLoading

  return (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard>
        {isLoading ? (
          <BarLoader />
        ) : error ? (
          error.message
        ) : (
          <List>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                key={id}
                title={name}
                subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                id={id}
                onSubmit={updateSession}
                action={
                  <RowAction
                    id={id}
                    name={name}
                    onDelete={deleteById}
                    onPlay={switchSession}
                    disabled={loading}
                  />
                }
              />
            ))}
          </List>
        )}
      </RawCard>
    </PageBody>
  )
}
