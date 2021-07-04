import React from 'react';

import Text from 'components/Text';
import styles from './NavigationBar.module.scss';

export interface NavigationBarProps {
  /**
   * NavigationBar contents
   */
  children: React.ReactNode;
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
  /**
   * If you need a title for navigation bar such as "Menu", "Stats", "Reports", and so on.
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */

function NavigationBar({
  className = '',
  children,
  title = '',
  ...props
}: NavigationBarProps) {
  const classes = [styles.wrapper, className].join(' ').trim();
  return (
    <div className={classes} {...props}>
      <Text variant="text14Regular" className={styles.title} color="primary">
        {title}
      </Text>
      <nav>
        <ul>{children}</ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
