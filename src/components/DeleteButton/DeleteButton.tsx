import { XCircleIcon } from '@heroicons/react/outline'
import IconButton, { IconButtonProps } from '../IconButton'

export type DeleteButtonProps = Partial<IconButtonProps>
export const DeleteButton = ({ ...props }: DeleteButtonProps) => {
  return (
    <IconButton color="danger" {...props}>
      <XCircleIcon />
    </IconButton>
  )
}

export default DeleteButton
