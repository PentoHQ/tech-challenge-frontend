import { XIcon } from '@heroicons/react/outline'
import IconButton, { IconButtonProps } from '../IconButton'

/**
 * Primary UI component for user interaction
 */
export const CloseButton = ({ className = '', ...props }: Partial<IconButtonProps>) => {
  return (
    <IconButton className={className} color="primary" {...props} title="Close">
      <XIcon></XIcon>
    </IconButton>
  )
}

export default CloseButton
