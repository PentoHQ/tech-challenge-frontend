import { PencilIcon } from '@heroicons/react/outline'
import IconButton, { IconButtonProps } from '../IconButton'

/**
 * Primary UI component for user interaction
 */
export const EditButton = ({ ...props }: Partial<IconButtonProps>) => {
  return (
    <IconButton color="primary" {...props}>
      <PencilIcon></PencilIcon>
    </IconButton>
  )
}

export default EditButton
