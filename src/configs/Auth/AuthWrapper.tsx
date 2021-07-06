import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from 'components/LoginButton';
import Loading from 'components/Loading';

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, error, isAuthenticated } = useAuth0();

  /** wrapper class name: to make loading and error message */
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <>Oops... {error.message}</>;
  }
  if (!isAuthenticated) return <LoginButton />;
  return <>{children}</>;
}

export default AuthWrapper;
