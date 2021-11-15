import React from 'react'

import PlayButton from '../PlayButton'
import DeleteButton from '../DeleteButton'

import css from './RowAction.module.scss'

interface RowActionProps {
  id: string
  name: string
  disabled?: boolean
  onDelete: (id: string) => void
  onPlay: (name: string) => void
}

export const RowAction: React.FC<RowActionProps> = ({ name, id, onDelete, onPlay, disabled }) => {
  const handleDelete = () => {
    onDelete(id)
  }
  const handlePlay = () => {
    onPlay(name)
  }
  return (
    <>
      <DeleteButton
        className={css.Buttons}
        size="small"
        onClick={handleDelete}
        disabled={disabled}
      />
      <PlayButton size="small" onClick={handlePlay} disabled={disabled} />
    </>
  )
}
