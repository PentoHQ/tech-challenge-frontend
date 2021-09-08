import React, { useState } from 'react'

import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import Spacer from '../../components/Spacer'
import CenteredText from 'components/CenteredText'
import SectionHeader from 'components/SectionHeader'
import DeleteButton from 'components/DeleteButton'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession, useDeleteSession, useUpdateSession } from './hooks'
import SessionControls from './SessionControls'

function RowAction({ name, id }: { name: string; id: string }) {
  const switchSession = useSwitchSession()
  const deleteSession = useDeleteSession()

  return (
    <>
      <DeleteButton
        size="small"
        onClick={() => deleteSession(id)}
        title="Delete Session"
      ></DeleteButton>
      &nbsp;
      <PlayButton
        size="small"
        onClick={() => switchSession(name)}
        title="Switch Session"
      ></PlayButton>
    </>
  )
}

export default function SessionsListPage(props: any) {
  const [selectedSessionId, setSelectedSessionId] = useState('')
  const { data, isLoading, error } = useGetSessions()
  const updateSession = useUpdateSession()
  /* 
    Calculate total hours spent for all the sessions
    This will help user with the complete overview and better management 
  */
  const totalHours = data?.sessions.reduce(
    (acm, item) => acm + diffDateStrings(item.startDate, item.endDate),
    0,
  )

  const showTextInCenter = (text: string) => {
    return <CenteredText>{text}</CenteredText>
  }

  const getAllSessionsHeaderLabel = () => {
    return `All Sessions (${data?.sessions.length || 0})`
  }

  const handleUpdateSession = async (newName: string) => {
    await updateSession(selectedSessionId, newName)
    setSelectedSessionId('')
  }

  return (
    <PageBody>
      <Spacer pb={3}>
        <>
          <SectionHeader>Active Session</SectionHeader>
          <SessionControls />
        </>
      </Spacer>
      <SectionHeader totalHours={msToHuman(totalHours || 0)}>
        {getAllSessionsHeaderLabel()}
      </SectionHeader>
      <RawCard>
        {isLoading ? (
          showTextInCenter('Loading sessions...')
        ) : error ? (
          error.message
        ) : (
          <>
            <List>
              {data?.sessions.map(({ id, name, startDate, endDate }) => (
                <ListItem
                  key={id}
                  title={name}
                  isEditing={selectedSessionId === id}
                  subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                  onSave={(name: string) => handleUpdateSession(name)}
                  onCancel={() => setSelectedSessionId('')}
                  action={<RowAction name={name} id={id} />}
                />
              ))}
            </List>
            {data && data?.sessions.length === 0 ? showTextInCenter('No Data') : null}
          </>
        )}
      </RawCard>
    </PageBody>
  )
}
