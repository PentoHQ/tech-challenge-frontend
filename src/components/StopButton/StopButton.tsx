import { StopIcon } from '@heroicons/react/outline'
import IconButton, { IconButtonProps } from '../IconButton'

/**
 * Primary UI component for user interaction
 */
export const StopButton = ({ className = '', ...props }: Partial<IconButtonProps>) => {
  return (
    <IconButton color="danger" {...props}>
      <StopIcon></StopIcon>
    </IconButton>
  )
}

export default StopButton
