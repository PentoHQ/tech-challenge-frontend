import { StopIcon, XCircleIcon } from '@heroicons/react/outline'
import IconButton, { IconButtonProps } from '../IconButton'

/**
 * Primary UI component for user interaction
 */
export const StopButton = ({ className = '', ...props }: Partial<IconButtonProps>) => {
  return (
    <IconButton color="danger" {...props}>
      {props.disabled ? <XCircleIcon /> : <StopIcon />}
    </IconButton>
  )
}

export default StopButton
