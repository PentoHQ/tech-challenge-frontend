import { useState } from 'react'
import { PageBody } from '../../components/Page'
import ChartContainer from './ChartContainer'
import SelectDropDown from 'components/SelectDropDown'

export default function StatsPage(props: any) {
  const [selectedType, setSelectedType] = useState('Today')
  return (
    <PageBody>
      <SelectDropDown
        label="Session Data By:"
        onChange={(value: string) => setSelectedType(value)}
      />
      <ChartContainer title={selectedType} />
    </PageBody>
  )
}
