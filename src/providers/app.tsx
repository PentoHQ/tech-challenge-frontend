import { useAuth0 } from '@auth0/auth0-react'
import type { ReactNode } from 'react'
import { Suspense } from 'react'
import Loading from 'src/components/Loading'
import styles from './app.module.scss'

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props): JSX.Element => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return (
      <div className={styles.loadingWrapper}>
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.loadingWrapper}>
        <span>Oops... {error.message}</span>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className={styles.loadingWrapper}>
          <span>Loading the page...</span>
        </div>
      }
    >
      {children}
    </Suspense>
  )
}
