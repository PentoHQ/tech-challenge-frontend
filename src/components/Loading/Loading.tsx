import styles from './Loading.module.scss';

/**
 * loadingType handles loading for screens(circle) and
 * components(linear: such as SessionControls component).
 *
 * possible to have more loading types in the future
 */
type Props = {
  loadingType?: 'spin' | 'linear';
};

function SpinnerLoading() {
  return (
    <div className={styles.spinnerWrapper}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function LinearLoading() {
  return (
    <div className={styles.linearWrapper}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function Loading({ loadingType = 'spin' }: Props) {
  return (
    <div className={styles.wrapper}>
      {loadingType === 'linear' ? <LinearLoading /> : <SpinnerLoading />}
    </div>
  );
}

export default Loading;
