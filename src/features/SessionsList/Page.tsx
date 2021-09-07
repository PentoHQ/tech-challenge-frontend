import { RawCard } from '../../components/Card'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import { PageBody } from '../../components/Page'
import PlayButton from '../../components/PlayButton'
import Spacer from '../../components/Spacer'
import CenteredText from 'components/CenteredText'
import SectionHeader from 'components/SectionHeader'
import { diffDateStrings } from '../../util/diffDateStrings'
import { msToHuman } from '../../util/formatters/formatDateDiff'
import { useGetSessions, useSwitchSession } from './hooks'
import SessionControls from './SessionControls'

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession()
  return (
    <PlayButton
      size="small"
      onClick={() => switchSession(name)}
      title="Switch Session"
    ></PlayButton>
  )
}

export default function SessionsListPage(props: any) {
  const { data, isLoading, error } = useGetSessions()

  /* 
    - Calculate total hours spent for all the sessions
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
                  subtitle={msToHuman(diffDateStrings(startDate, endDate))}
                  action={<RowAction name={name} />}
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
