import { useState } from 'react'

import { formatDateToHuman } from 'util/formatters/formatDateDiff'

import Button from 'components/Button'
import Card, { CardHeader, CardContent } from 'components/Card'
import InputText from 'components/InputText'
import Text from 'components/Text'

import styles from './SessionEditItem.module.scss'

interface SessionEditProps {
  id: string
  name: string
  startDate: Date
  endDate: Date
  onClick: () => void
}

export default function SessionEditItem({
  id,
  name,
  startDate,
  endDate,
  onClick,
}: SessionEditProps) {
  const [draft, setDraft] = useState({
    name,
    startDate: formatDateToHuman(startDate),
    endDate: formatDateToHuman(endDate),
  })

  const handleInputChange = (key: string, value: string) => {
    setDraft(() => ({ ...draft, [key]: value }))
  }

  return (
    <Card
      className={styles.wrapper}
      footer={
        <CardContent>
          <div className={styles.footer}>
            <Button onClick={onClick}>Cancel</Button>
            <Button color="primary">Save</Button>
          </div>
        </CardContent>
      }
    >
      <CardHeader>
        <Text variant="h3">Editing session {id}</Text>
      </CardHeader>
      <CardContent>
        <InputText
          label="Session name"
          type="text"
          value={draft.name}
          onChange={(value) => handleInputChange('name', value)}
        />
        <div className={styles.dateInputs}>
          <InputText
            label="Start"
            type="text"
            value={draft.startDate}
            onChange={(value) => handleInputChange('startDate', value)}
          />
          <InputText
            label="End"
            type="text"
            value={draft.endDate}
            onChange={(value) => handleInputChange('endDate', value)}
          />
        </div>
      </CardContent>
    </Card>
  )
}
