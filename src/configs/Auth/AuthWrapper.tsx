import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from 'components/LoginButton';
import Loading from 'components/Loading';

import styles from './AuthWrapper.module.scss';

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, error, isAuthenticated } = useAuth0();

  /** wrapper class name: to make loading and error message */
  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div className={styles.wrapper}>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) return <LoginButton />;
  return <>{children}</>;
}

export default AuthWrapper;
