import { BarLoaderIcon } from 'assets'
import React from 'react'
import styles from './BarLoader.module.scss'

export const BarLoader: React.FC = () => {
  return (
    <div className={styles.Container}>
      <BarLoaderIcon className={styles.Icon} />
    </div>
  )
}
