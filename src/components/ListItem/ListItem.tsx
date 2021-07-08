import React, { ReactChild } from 'react';
import styles from './ListItem.module.scss';

export interface ListItemProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary';
  /**
   * How large should the listitem be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  dense?: boolean;
  disabled?: boolean;
  /**
   * The primary text
   */
  title: string;
  subtitle: string;
  /**
   * If you need to disable left-right gutters
   */
  disableGutters?: boolean;

  /**
   * An additional action per row
   */
  action?: ReactChild;

  /**
   * If you need to provide header per row
   */
  header?: ReactChild;

  /**
   * If you need to provide some additional description per row
   */
  details?: ReactChild;
}

/**
 * Primary UI component for user interaction
 */
export const ListItem = ({
  color = 'primary',
  size = 'medium',
  className = '',
  dense,
  disabled,
  title,
  disableGutters,
  subtitle,
  action,
  header,
  details,
  ...props
}: ListItemProps) => {
  const classes = [styles.wrapper, disabled ? styles.disabled : '', className]
    .join(' ')
    .trim();
  const bodyClasses = [
    styles.bodyWrapper,
    disableGutters ? '' : styles.gutters,
    dense ? styles.dense : '',
  ]
    .join(' ')
    .trim();
  const headerClasses = [styles.header, disableGutters ? '' : styles.gutters]
    .join(' ')
    .trim();
  return (
    <li className={classes} {...props}>
      {header && <div className={headerClasses}>{header}</div>}
      <div className={bodyClasses}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        {details && <div className={styles.details}>{details}</div>}
        {action && <div className={styles.action}>{action}</div>}
      </div>
    </li>
  );
};

export default ListItem;
