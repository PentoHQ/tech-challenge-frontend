import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.scss';
import logo from '../../logo.svg';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1>Pento time tracker</h1>
      <button onClick={loginWithRedirect}>Login</button>
    </div>
  );
}

export default LoginButton;
