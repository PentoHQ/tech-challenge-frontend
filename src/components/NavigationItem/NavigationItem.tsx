import React, { ReactChild } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

export interface NavigationItemProps {
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
  /**
   * Url to navigate to
   */
  url: string;
  /**
   * Contents of navigation button
   */
  children: ReactChild;
}

function NavigationItem({ url, children, className }: NavigationItemProps) {
  const classes = [styles.wrapper, className].join(' ').trim();
  return (
    <Link className={classes} to={url}>
      {children}
    </Link>
  );
}

export default NavigationItem;
