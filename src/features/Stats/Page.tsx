import { useState } from 'react'
import { PageBody } from '../../components/Page'
import ChartContainer from './ChartContainer'
import SelectDropDown from 'components/SelectDropDown'
import Spacer from 'components/Spacer'

export default function StatsPage(props: any) {
  const [selectedType, setSelectedType] = useState('Today')
  return (
    <PageBody>
      <SelectDropDown
        className="is-header"
        isHeader={true}
        label="Session Data By:"
        onChange={(value: string) => setSelectedType(value)}
      />
      <Spacer pb={3} />
      <ChartContainer title={selectedType} />
    </PageBody>
  )
}
