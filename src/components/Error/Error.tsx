import styles from './Error.module.scss';

export interface ErrorProps {
  /**
   * Error message
   * You can pass either an error message or a custom component to display
   * the error
   */
  message?: string;
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
}: ErrorProps) {
  const classes = [
    styles.wrapper,
    disablePadding ? '' : styles.padding,
    className,
  ]
    .join(' ')
    .trim();
  const msgClasses = [styles.message, styles[color]].join(' ').trim();
  return (
    <div className={classes}>
      {children ? (
        <>{children}</>
      ) : message ? (
        <span className={msgClasses}>{message}</span>
      ) : (
        <span className={msgClasses}>
          Oops... something unexpected has occured!
        </span>
      )}
    </div>
  );
}

export default Error;
