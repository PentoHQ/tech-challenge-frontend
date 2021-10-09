import { useAuth0 } from '@auth0/auth0-react'
import type { ReactNode } from 'react'
import { Suspense } from 'react'

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props): JSX.Element => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    // TODO: Create a separate loading component
    return <div style={{ backgroundColor: 'blue', height: '100vh' }}>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <Suspense
      fallback={
        // TODO: Create a separate loading component
        <div style={{ backgroundColor: 'red', height: '100vh' }}>Loading...</div>
      }
    >
      {children}
    </Suspense>
  )
}
