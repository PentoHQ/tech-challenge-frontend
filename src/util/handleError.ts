import type { ApolloError } from '@apollo/client'
import toast from 'react-hot-toast'

type Params = {
  error: ApolloError
}

export const handleError = ({ error }: Params): void => {
  toast.error(error.message)
  console.error(error)
}
