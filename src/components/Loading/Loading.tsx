import styles from './Loading.module.scss'

export const Loading = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <span>Loading...</span>
    </div>
  )
}

export default Loading
