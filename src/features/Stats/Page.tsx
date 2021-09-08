import { PageBody } from '../../components/Page'
import Spacer from '../../components/Spacer'
import ChartContainer from './ChartContainer'

export default function StatsPage(props: any) {
  return (
    <PageBody>
      <Spacer mb={4}></Spacer>
      <ChartContainer title="Today" />
    </PageBody>
  )
}
