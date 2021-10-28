import InputText from 'components/InputText'
import FormRow from 'components/FormRow'
import Text from 'components/Text'
import Spacer from 'components/Spacer'
import Button from 'components/Button'
import { useUpdateSession } from './hooks'

import { format, parse, add, isAfter } from 'date-fns'

import React, { useState } from 'react'
import { SyntheticEvent } from 'react'

const DATE_FORMAT = 'yyyy-MM-dd'
const TIME_FORMAT = 'HH:mm'
const RANGE_ERROR = 'The end date is less than the start date. Please change the end date'

interface FormProps {
  data: Item
  onClose: () => void
}

interface Item {
  id: string
  name: string
  startDate: string
  endDate: string
}

export default function EditSession({ data, onClose }: FormProps) {
  const [name, setName] = useState(data.name)

  const [startDate, setStartDate] = useState(formatDate(data.startDate))
  const [endDate, setEndDate] = useState(formatDate(data.endDate))

  const [startTime, setStartTime] = useState(formatTime(data.startDate))
  const [endTime, setEndTime] = useState(formatTime(data.endDate))

  const [validationError, serValidationError] = useState('')

  const { update, isLoading, error } = useUpdateSession()

  const handleSubmit = (e?: SyntheticEvent) => {
    e?.preventDefault()

    const newStartDate = addTimeAndDate(startDate, startTime)
    const newEndDate = addTimeAndDate(endDate, endTime)

    if (!isAfter(newEndDate, newStartDate)) {
      serValidationError(RANGE_ERROR)

      return
    }

    serValidationError('')

    update(data.id, name, newStartDate, newEndDate).then(onClose)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <InputText value={name} onChange={setName} required label="Name" id="name" />
      </div>

      <FormRow>
        <InputText
          value={startDate}
          onChange={setStartDate}
          type="date"
          label="Start date"
          id="startDate"
        />

        <InputText
          value={startTime}
          onChange={setStartTime}
          type="time"
          label="Start time"
          id="startTime"
        />
      </FormRow>

      <FormRow>
        <InputText
          value={endDate}
          onChange={setEndDate}
          type="date"
          label="End date"
          id="endDate"
        />

        <InputText
          value={endTime}
          onChange={setEndTime}
          type="time"
          label="End time"
          id="endTime"
        />
      </FormRow>

      {validationError && (
        <Spacer mt={2}>
          <Text color="danger">{validationError}</Text>
        </Spacer>
      )}

      {!!error && (
        <Spacer mt={2}>
          <Text color="danger">{error.message}</Text>
        </Spacer>
      )}

      <Spacer mt={2}>
        <FormRow align="sides" stretchChildren={false}>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>

          <Button color="primary" type="submit" disabled={isLoading} isLoading={isLoading}>
            Save changes
          </Button>
        </FormRow>
      </Spacer>
    </form>
  )
}

function formatDate(date: string) {
  return format(new Date(date), DATE_FORMAT)
}

function formatTime(date: string) {
  return format(new Date(date), TIME_FORMAT)
}

function addTimeAndDate(date: string, time: string) {
  const dateParsed = parse(date, DATE_FORMAT, new Date())
  const timeParsed = parse(time, TIME_FORMAT, new Date())

  return add(dateParsed, {
    hours: timeParsed.getHours(),
    minutes: timeParsed.getMinutes(),
  })
}
