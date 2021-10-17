import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import Spinner from '../../components/Spinner'
import Alert from '../../components/Alert'

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, error, isAuthenticated } = useAuth0()
  if (isLoading) {
    return <Spinner withBackdrop={true} />
  }
  if (error) {
    return <Alert kind="error" text={`Oops... ${error.message}`} />
  }
  if (!isAuthenticated) return <LoginButton />
  return <>{children}</>
}

export default AuthWrapper
