import styles from './Loading.module.scss';

/**
 * loadingType handles loading for screens(circle) and
 * components(linear: such as SessionControls component).
 *
 * possible to have more loading types in the future
 */
type Props = {
  loadingType?: 'circle' | 'linear';
};

function Loading({ loadingType = 'circle' }: Props) {
  if (loadingType === 'linear') {
    return (
      <div className={styles.linearWrapper}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <div className={styles.circleWrapper}>
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

export default Loading;
