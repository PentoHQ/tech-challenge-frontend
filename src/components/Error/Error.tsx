import Text, { TextVariant } from 'components/Text';
import styles from './Error.module.scss';

export interface ErrorProps {
  /**
   * Error message
   * You can pass either an error message or a custom component to display
   * the error
   */
  message?: string;
  /**
   * How large should the text in the Error component should be?
   */
  size?: TextVariant;
  /**
   * Error contents
   */
  children?: React.ReactNode;
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
  /**
   * Provide your custom color for the error message
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  /**
   * If you need to disable left-right padding
   */
  disablePadding?: boolean;
  /**
   * If the error message should be left or right aligned
   */
  align?: 'left' | 'right' | 'center' | 'sides';
}

/**
 * Primary UI component for user interaction
 */

function Error({
  children,
  className,
  message,
  color = 'danger',
  disablePadding,
  size = 'text16Regular',
  align,
}: ErrorProps) {
  const classes = [
    styles.wrapper,
    disablePadding ? '' : styles.padding,
    align === 'left'
      ? styles.leftAlign
      : align === 'right'
      ? styles.rightAlign
      : align === 'sides'
      ? styles.sides
      : '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <div className={classes}>
      {children ? (
        <>{children}</>
      ) : message ? (
        <Text variant={size} className={styles[color]}>
          {message}
        </Text>
      ) : (
        <Text variant={size} className={styles[color]}>
          Oops... something unexpected has occured!
        </Text>
      )}
    </div>
  );
}

export default Error;
