import { PageBody } from '../../components/Page'
import Spacer from '../../components/Spacer'
import DayChart from './DayChart'
import MonthChart from './MonthChart'
import styles from './Page.module.scss'
import WeekChart from './WeekChart'

export default function StatsPage(props: any) {
  return (
    <PageBody className={styles.wrapper}>
      <Spacer mb={4}></Spacer>
      <DayChart />
      <WeekChart />
      <MonthChart />
    </PageBody>
  )
}
