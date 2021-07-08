import styles from './Loading.module.scss';

/**
 * loadingType handles loading for screens(circle) and
 * components(linear: such as SessionControls component).
 *
 * possible to have more loading types in the future
 */
export interface LoadingProps {
  loadingType?: 'spin' | 'linear';
  size?: 'small' | 'medium' | 'large';
}

type SpinnerLoadingProps = {
  size?: 'small' | 'medium' | 'large';
};

function SpinnerLoading({ size = 'small' }: SpinnerLoadingProps) {
  const classes = [styles.spinnerWrapper, styles[size]].join(' ').trim();
  const spinClasses = [styles.spin, styles[size]].join(' ').trim();
  const textClasses = [styles.text, styles[size]].join(' ').trim();
  return (
    <div className={classes}>
      <div className={spinClasses}></div>
      <div className={textClasses}></div>
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

function Loading({ loadingType = 'spin', size }: LoadingProps) {
  return (
    <div className={styles.wrapper}>
      {loadingType === 'linear' ? (
        <LinearLoading />
      ) : (
        <SpinnerLoading size={size} />
      )}
    </div>
  );
}

export default Loading;
