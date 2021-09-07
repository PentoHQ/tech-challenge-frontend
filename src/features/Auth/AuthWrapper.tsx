import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import CenteredText from 'components/CenteredText'

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, error, isAuthenticated } = useAuth0()
  if (isLoading) {
    return <CenteredText>Validating user...</CenteredText>
  }
  if (error) {
    return <CenteredText>Oops... {error.message}</CenteredText>
  }
  if (!isAuthenticated) return <LoginButton />
  return <>{children}</>
}

export default AuthWrapper
