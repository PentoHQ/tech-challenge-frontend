import { PageBody } from '../../components/Page'
import Spacer from '../../components/Spacer'
import Chart from './Chart'

export default function StatsPage(props: any) {
  return (
    <PageBody>
      <Spacer mb={4}></Spacer>
      <Chart />
    </PageBody>
  )
}
