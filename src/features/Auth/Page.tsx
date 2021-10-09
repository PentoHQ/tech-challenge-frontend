import styles from './Auth.module.scss'
import logo from 'src/logo.svg'
import LoginButton from './LoginButton'

const LoginPage = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Pento time tracker</h1>
      <LoginButton />
    </div>
  )
}

export default LoginPage
