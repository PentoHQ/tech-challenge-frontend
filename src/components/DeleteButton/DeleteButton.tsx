import { TrashIcon } from '@heroicons/react/outline'
import IconButton, { IconButtonProps } from '../IconButton'

/**
 * Primary UI component for user interaction
 */
export const DeleteButton = ({ ...props }: Partial<IconButtonProps>) => {
  return (
    <IconButton color="danger" {...props}>
      <TrashIcon></TrashIcon>
    </IconButton>
  )
}

export default DeleteButton
