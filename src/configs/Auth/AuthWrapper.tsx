import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from 'components/LoginButton';
import Loading from 'components/Loading';
import Error from 'components/Error';

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error?.message} />;
  }
  if (!isAuthenticated) return <LoginButton />;
  return <>{children}</>;
}

export default AuthWrapper;
