import { PlayIcon } from '@heroicons/react/outline'
import IconButton, { IconButtonProps } from '../IconButton'

export type PlayButtonProps = Partial<IconButtonProps>
export const PlayButton = ({ ...props }: PlayButtonProps) => {
  return (
    <IconButton color="success" {...props}>
      <PlayIcon></PlayIcon>
    </IconButton>
  )
}

export default PlayButton
