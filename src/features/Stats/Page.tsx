import { PageBody } from '../../components/Page'
import Spacer from '../../components/Spacer'
import MonthChart from './MonthChart'
import WeekChart from './WeekChart'
import DayChart from './DayChart'

export default function StatsPage(props: any) {
  return (
    <PageBody>
      <Spacer mb={4}></Spacer>
      <DayChart />
      <WeekChart />
      <MonthChart />
    </PageBody>
  )
}
