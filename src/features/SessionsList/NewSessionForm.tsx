import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import FormRow from 'src/components/FormRow'
import InputText from 'src/components/InputText'
import PlayButton from 'src/components/PlayButton'
import { ERROR_MESSAGES } from 'src/constants'
import { useRunningSession } from './hooks'

type FormFields = {
  sessionName: string
}

const NewSessionForm = (): JSX.Element => {
  const { isLoading, startSession } = useRunningSession()
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormFields>({
    mode: 'all',
  })

  const onSubmit = useCallback(
    ({ sessionName }: FormFields) => {
      startSession(sessionName)
    },
    [startSession],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow alignY="bottom" stretchLastChild={false}>
        <InputText
          label="Session Name"
          error={errors.sessionName?.message}
          {...register('sessionName', {
            required: ERROR_MESSAGES.REQUIRED,
          })}
          disabled={isLoading}
          required
        />
        <PlayButton disabled={isLoading || !isValid} type="submit" />
      </FormRow>
    </form>
  )
}

export default NewSessionForm
