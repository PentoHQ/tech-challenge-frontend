import { PlayIcon } from '@heroicons/react/outline';
import IconButton, { IconButtonProps } from '../IconButton';

/**
 * Primary UI component for user interaction
 */
export const PlayButton = ({ ...props }: Partial<IconButtonProps>) => {
  return (
    <IconButton color="success" {...props}>
      <PlayIcon></PlayIcon>
    </IconButton>
  );
};

export default PlayButton;
