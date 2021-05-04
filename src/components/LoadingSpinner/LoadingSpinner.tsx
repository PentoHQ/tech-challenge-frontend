import styles from './LoadingSpinner.module.scss'

export type LoadingSpinnerProps = {
  fullscreen?: true
}

export const LoadingSpinner = ({ fullscreen }: LoadingSpinnerProps) => {
  if (fullscreen) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.spinner} />
      </div>
    )
  }
  return <div className={styles.spinner} />
}

export default LoadingSpinner
